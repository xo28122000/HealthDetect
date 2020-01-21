#!/usr/bin/env python
# coding: utf-8

# In[1]:


from flask import Flask, jsonify
import tensorflow as tf
from flask import request
# new_model = tf.keras.models.load_model('my_model.h5')
import base64
import numpy as np

import io
from PIL import Image

from skimage import data, color
from skimage.transform import rescale, resize, downscale_local_mean

app = Flask(__name__)

from tensorflow.keras.models import load_model

btumor_model = load_model("./btumor_model.h5")
pneumonia_model = load_model("./pnumonia_model.h5")
pap_model = load_model("./pap_model.h5")

@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/predict", methods=['POST'])
def predict():
    binImg_raw = (request.json["binImg"])
    binImg = binImg_raw[binImg_raw.index("base64,")+len("base64")+1:]
    r = base64.b64decode(binImg)
    image_bytes = io.BytesIO()
    image_bytes.write(r)
    image = Image.open(image_bytes).convert('L')
    im = np.array(image)
    image_resized = resize(im, (150, 150),
                       anti_aliasing=True)
    finimg = [[list(np.resize(image_resized,(150,150,1)))]]
    
    
    if(request.json["type"] == "bt"):
        prediction = btumor_model.predict(finimg)[0]
    elif(request.json["type"] == "pn"):
        prediction = pneumonia_model.predict(finimg)[0]
    elif(request.json["type"] == "ps"):
        prediction = pap_model.predict(finimg)[0]
    print(prediction)
    if prediction[0] > prediction[1]: # NO more likely than YES
        return jsonify({"No Finding": str(prediction[0])}), 201
    else: # YES more likely than NO
        return jsonify({"prediction": str(prediction[1])}), 201
    return jsonify({'task': "fail"}), 201
    
    




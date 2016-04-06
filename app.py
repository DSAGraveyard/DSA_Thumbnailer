#!/usr/bin/python
# initialize the flask app
# add configuration to the application
# register the blueprints with the app

from flask import Flask

#start the flask app
app = Flask('thumbnailer')

@app.route("/Thumbnailer/")
def hello():
    return "Hello World!"

#!/usr/bin/python
# initialize the flask app
# add configuration to the application
# register the blueprints with the app

from routes.deepzoom import dz
from routes.slides import slides
from routes.static import static
from  flask import Flask
from utils.config import get_app_configurations
import pymongo
from flask import jsonify
from bson import ObjectId
import json

#attach configurations stored in app.cfg to the app
app = Flask('thumbnailer')
app.config.from_envvar('DEEPZOOM_MULTISERVER_SETTINGS', silent=True)
app.config.update(get_app_configurations())

#register the route blueprints to the app
app.register_blueprint(dz)
app.register_blueprint(slides)
app.register_blueprint(static)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=6061, debug=True)

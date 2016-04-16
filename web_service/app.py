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


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)



#start the flask app
app = Flask('thumbnailer')

#attach configurations stored in app.cfg to the app
app.config.from_envvar('DEEPZOOM_MULTISERVER_SETTINGS', silent=True)
app.config.update(get_app_configurations())

#register the route blueprints to the app
app.register_blueprint(dz)
app.register_blueprint(slides)
app.register_blueprint(static)

### connect to Mongo and get a pointer
client = pymongo.MongoClient(app.config['db_host'],27017)
DSA_db = client[app.config['db_name']]

@app.route("/Thumbnailer/")
def hello():
    return "Hello World!"

@app.route("/api/v1/SlideSets")
def return_SlideSets():
	"""This will return all of the available slide sets... I am avoiding the use of collections to avoid getting
	confused with the Mongo and Girder Terms"""
	return "HI"

@app.route("/api/v1/Slides")
def return_Slides():
	"""This will return all of the available slide sets... I am avoiding the use of collections to avoid getting
	confused with the Mongo and Girder Terms"""
	curs = DSA_db['DSA_Slide_Data'].find()
	slides_to_return = []
	rec_id = 0
	for r in curs:
		##Will inject an ID field since this is needed to WEBIX to work properly
		rec_id +=1
		r['ID'] = rec_id
		### Going to trim out non-whitelisted slide properties for now
		sld_props = r['sld_properties']
		r['sld_properties'] = { 'aperio_AppMag': 20   } 

		slides_to_return.append(r)


	return JSONEncoder().encode( slides_to_return)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=6060, debug=True)

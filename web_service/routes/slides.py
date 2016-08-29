from flask import request, url_for, jsonify, make_response, Blueprint, current_app as app
from bson.json_util import dumps
from utils.crossdomains import crossdomain
from utils.deepzoom import _get_slide, _SlideCache
import pymongo, os, gridfs, re
from utils.db import connect

slides = Blueprint('slides', __name__)
db = None

@slides.record
def record_params(setup_state):
    app = setup_state.app
    slides.config = app.config

@slides.before_app_first_request
def _setup():
    global db
    db = connect(slides.config)

@slides.route('/api/v1/collections')
@crossdomain(origin='*')
def get_collections():
    coll_list = slide_db_ptr['DSA_Slide_Data'].distinct('pt_id')
    return jsonify( { 'Collections': sorted(coll_list) })

@slides.route('/api/v1/slides')
@crossdomain(origin='*')
def get_slides():
    """This will return the list of slides for a given collection aka tumor type """
    start = request.args.get('start', 0)
    count = request.args.get('count', 20)
    filters = {}
    sorts = []
    
    for key in request.args:
        val = request.args.get(key)
        m = re.match(r"(.*)\[(.*)\]", key)
        if m:
            op = m.group(1)
            field = m.group(2)

            if op == "filter" and val != '':
                filters[field] = { "$regex": str(".*" + val + ".*"), "$options": "i" }
            if op == "sort" and val != '':
                sorts.append((field, 1 if val == "asc" else -1))
  
    if len(sorts) > 0:
        return dumps({"data": db.find(filters, {'scanProperties': False}).skip(int(start)).limit(int(count)).sort(sorts), "pos": int(start), "total_count": db.find(filters).count()})
    else:
        return dumps({"data": db.find(filters, {'scanProperties': False}).skip(int(start)).limit(int(count)), "pos": int(start), "total_count": db.find(filters).count()})

##This will process and store files that were marked as bad...
@slides.route('/api/v1/report_bad_image', methods=["POST"])
def report_bad_images():
    filename=request.form['filename']
    slide_url = request.form['slide_url']
    data_group = request.form['data_group']
    load_errors_db['cdsa_live'].insert({ 'filename':filename, 'slide_url':slide_url, 'data_group':data_group})
    return 'OK'


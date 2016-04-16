coll_list = [{"collection_id": "prad", "collection_description": "Coming Soon", "collection_name": "prad"}, {"collection_id": "acc", "collection_description": "Coming Soon", "collection_name": "acc"}, {"collection_id": "gbm", "collection_description": "Coming Soon", "collection_name": "gbm"}, {"collection_id": "lgg", "collection_description": "Coming Soon", "collection_name": "lgg"}, {"collection_id": "coad", "collection_description": "Coming Soon", "collection_name": "coad"}, {"collection_id": "luad", "collection_description": "Coming Soon", "collection_name": "luad"}, {"collection_id": "lusc", "collection_description": "Coming Soon", "collection_name": "lusc"}, {"collection_id": "meso", "collection_description": "Coming Soon", "collection_name": "meso"}, {"collection_id": "cesc", "collection_description": "Coming Soon", "collection_name": "cesc"}, {"collection_id": "ucec", "collection_description": "Coming Soon", "collection_name": "ucec"}, {"collection_id": "read", "collection_description": "Coming Soon", "collection_name": "read"}, {"collection_id": "thca", "collection_description": "Coming Soon", "collection_name": "thca"}, {"collection_id": "brca", "collection_description": "Coming Soon", "collection_name": "brca"}, {"collection_id": "kirc", "collection_description": "Coming Soon", "collection_name": "kirc"}, {"collection_id": "kirp", "collection_description": "Coming Soon", "collection_name": "kirp"}, {"collection_id": "sarc", "collection_description": "Coming Soon", "collection_name": "sarc"}, {"collection_id": "paad", "collection_description": "Coming Soon", "collection_name": "paad"}, {"collection_id": "dlbc", "collection_description": "Coming Soon", "collection_name": "dlbc"}, {"collection_id": "pcpg", "collection_description": "Coming Soon", "collection_name": "pcpg"}, {"collection_id": "blca", "collection_description": "Coming Soon", "collection_name": "blca"}, {"collection_id": "thym", "collection_description": "Coming Soon", "collection_name": "thym"}, {"collection_id": "ucs", "collection_description": "Coming Soon", "collection_name": "ucs"}, {"collection_id": "kich", "collection_description": "Coming Soon", "collection_name": "kich"}, {"collection_id": "stad", "collection_description": "Coming Soon", "collection_name": "stad"}, {"collection_id": "chol", "collection_description": "Coming Soon", "collection_name": "chol"}, {"collection_id": "hnsc", "collection_description": "Coming Soon", "collection_name": "hnsc"}, {"collection_id": "ov", "collection_description": "Coming Soon", "collection_name": "ov"}, {"collection_id": "tgct", "collection_description": "Coming Soon", "collection_name": "tgct"}, {"collection_id": "skcm", "collection_description": "Coming Soon", "collection_name": "skcm"}, {"collection_id": "esca", "collection_description": "Coming Soon", "collection_name": "esca"}, {"collection_id": "lihc", "collection_description": "Coming Soon", "collection_name": "lihc"}, {"collection_id": "uvm", "collection_description": "Coming Soon", "collection_name": "uvm"}]

var osd_viewer; //Makign this publically scoped for debugging...

function configure_osd(container_to_use) {
    //Given a target container, this will instantiate an openseadragon viewer
    osd_viewer = OpenSeadragon({
        'id': container_to_use,
        'prefixUrl': 'bower_components/openseadragon/built-openseadragon/openseadragon/images/',
        'navigationPosition': 'UPPER_RIGHT',
        'showNavigation': true,
        'maxZoomLevel': 4,
        'showRotationControl': true, // Show rotation buttons
    })

    defaultimg_not_avail = {
        'type': 'legacy-image-pyramid',
        levels: [{
            'url': 'https://c1.staticflickr.com/3/2150/2101058680_64fa63971e.jpg',
            'height': 435,
            'width': 356,
        }]
    };

    osd_viewer.open(defaultimg_not_avail);
    //Will now bind an SVG object to the viewer so I can do fun D3 stuff
    osd_svg_layer = osd_viewer.svgOverlay();

}
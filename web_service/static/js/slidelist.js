webix.ui({
	container:"layout_div",
    id:"slidelist",
	view: "datatable",
	autoConfig: true,
	navigation:true,
	columns:[
		{ id:"slide_name", header:["Slide Name", {content:"textFilter"}], width:300},
		{ id:"width", header:"Width", width:80},
		{ id:"height", header:"Height", width:80},
		{ id:"slide_w_path", header:["Slide Path", {content:"textFilter"}], width:400,  fillspace:true},
		{ id:"orig_resolution", header:"Ori. Res.", width:50},
		{ id:"OpenSlideCouldOpen", header:"OpenSlideOpen", width:100},
		{ id:"OpenSlideFailedOpen", header:"OpenSlide Failed", width:100}
	],
	url: "http://digitalslidearchive.emory.edu:6060/api/v1/slides",
	pager:{
		template:"{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
		container:"paging",
		size:18,
		group:5
	},
	datafetch:40,
	loadahead:15
});

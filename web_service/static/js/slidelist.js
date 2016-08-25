webix.ui({
	container:"layout_div",
    id:"slidelist",
	view: "datatable",
	columns:[
		{ id:"fileName", header:["File Name", {content:"serverFilter"}], width:300},
		{ id:"width", header:"Width", width:80},
		{ id:"height", header:"Height", width:80},
		{ id:"slidePath", header:["Slide Path", {content:"serverFilter"}], width:400,  fillspace:true},
		{ id:"orig_resolution", header:"Ori. Res.", width:50},
		{ id:"openSlideSuccess", header:"OpenSlide Success", width:100},
	],
	url: "/api/v1/slides",
	pager:{
		template:"{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
		container:"paging",
		size:20,
		group:5
	},
	datafetch:20,
	loadahead:20
});

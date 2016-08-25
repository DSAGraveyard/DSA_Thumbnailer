function gridClicked(id)
	{
	console.log(id);

	rowInfo = $$("slidelist").getItem(id);
	console.log(rowInfo);

	slidePath = rowInfo['slidePath']
	//This is a stupid hack at this point... may or may not need to use the full path

	$("#myfirstthumb").attr('src','/thumbnail'+slidePath); //need to add in some logic to deal with slashes

	}


webix.ui({
	container:"layout_div",
    id:"slidelist",
	view: "datatable",
	columns:[
		{ id:"fileName", header:["File Name", {content:"serverFilter"}], width:300},
		{ id:"width", sort: "server", header:"Width", width:80},
		{ id:"height", sort: "server", header:"Height", width:80},
		{ id:"slidePath", header:["Slide Path", {content:"serverFilter"}], width:400,  fillspace:true},
		{ id:"orig_resolution", header:"Ori. Res.", width:50},
		{ id:"openSlideSuccess", header:"OpenSlide Success", width:100},
	],
	url: "/api/v1/slides",
	select:true,
	navigation:true,
	pager:{
		template:"{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}Total: #count#",
		container:"paging",
		size:20,
		group:5
	},
	datafetch:20,
	loadahead:20,
	on:
		{
		"onAfterSelect": gridClicked

		}
});

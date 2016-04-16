/* This contains various scripts using during the onload and/or those which are page specific */

//     //template:"<div class='webix_strong'>#title#</div> Year: #year#, rank: #rank#",
    
    
//     xCount:3, //the number of items in a row
//     yCount:4 //the number of items in a column
// });

sample_data = [
					{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1},
					{ id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2},
					{ id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3},
					{ id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4}
				]






function doOnLoad() {

console.log('DSA Thumbnailer Loading');


// thumb_dataview = new webix.ui({
//     view:"dataview",
//     width: 150,
//     container:"dsa_thumbs",
//     url: 'http://cancer.digitalslidearchive.emory.edu/api/v2/collections/slides/acc',
//     template: '<#_id#>',

//     id: 'thumbDV'
// 	});


			
 // leftCol = {
 //        view: "datatable",width:250,
 //        autoConfig: true,
 //        editable: true,
 //        data: {
 //            title: "My Fair Lady",
 //            year: 1964,
 //            votes: 533848,
 //            rating: 8.9,
 //            rank: 5
 //        }
 //    };


function handler(){
    console.log(this);
    console.log(this.data)
}

var dsa_toolbar;
dsa_toolbar = {
    view:"toolbar",
    id:"myToolbar",
    cols:[
        { view:"template", template:"DSA Thumbnailer"},
        { view:"button", id:"LoadBut", value:"Load", width:100, align:"left", click: handler},
        { view:"button", value:"Save", width:100, align:"center" },
        { view:"button", value:"Info", width:100, align:"right" }]
};

thumbit =    {
             view:"dataview", 
             id:"dataview1",
             width:250,
             select:true,
             type: {
                 height: 300
             },
             template:"<div class='webix_strong'>#slide_name#<br> <img width=200 src=#thumbnail_image#></div>",
             
         };   



    webix.ui({
               container:"layout_div",
               id:"layout",
               rows:[
                   dsa_toolbar, //  I defined this above so it's a bit cleaner
                   {template:"row 1", height:35 },
                   {cols:[
                       thumbit,
                       {
                           id:"a1",
                           template:"column 1",
                           width:150
                       },
                       {
                           view:"resizer",
                           id:"resizer"
                       },
                       {
                           view: "template",
                           content: "osd_container"
                       }
                   ]
                   }
               ]
           }).show();
            configure_osd("osd_container");


    // p1_DataView = new dhtmlXDataView({
    //     container: "p1_data_container",
    //     type: 'p1_dataImgOnly',
    //     pager: {
    //         container: "paging_here",
    //         size: 40,
    //         group: 8
    //     }

    // });
    // p1_DataView.load("/uda/ip_load/phase1test_remote.json", "json", p1_load_done);




//leaves at 12:25 through paris   $553


//this is a neat way to do it.. need to investigate this further
// <div data-view='cols' data-type='space'>
//     <div data-view='calendar'>Calendar</div>
//     <div data-view='tabview'>
//         <div data-header='Users' data-view='list'>
//             <ul data-view='data'>
//                 <li>Alex Wolski</li><li>Daniel Brown</li>
//             </ul>
//         </div>
//         <div data-header='Details'>Lorem ipsum dolor sit</div>
//     </div>
// </div>



  

}
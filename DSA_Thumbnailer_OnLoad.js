/* This contains various scripts using during the onload and/or those which are page specific */

function doOnLoad() {

console.log('DSA Thumbnailer Loading');


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

    // p2_DataView = new dhtmlXDataView({
    //     container: "p2_data_container",
    //     type: 'p2_dataImgOnly',
    //     pager: {
    //         container: "pager_p2",
    //         size: 40,
    //         group: 8
    //     }
    // });

    // p2_DataView.load("/uda/ip_load/phase2test_remote.json", "json", p2_load_done);
    // // Initialize Slider for Phase 1
    // opSlider = new dhtmlXSlider({
    //     parent: "opacitySlider",
    //     size: 150,
    //     value: 0.8,
    //     step: 0.05,
    //     min: 0,
    //     max: 1
    // });

    // opSlider.attachEvent("onChange", function(value) {
    //     $("#p1_liv_combined_overlay").css('opacity', value);
    // });

    // p2_opSlider = new dhtmlXSlider({
    //     parent: "p2_opacitySlider",
    //     size: 150,
    //     value: 0.8,
    //     step: 0.05,
    //     min: 0,
    //     max: 1
    // });

    // p2_opSlider.attachEvent("onChange", function(value) {
    //     $(".tileClass").css('opacity', value);
    // });

    // osd_opSlider = new dhtmlXSlider({
    //     parent: "osd_tile_slider",
    //     size: 150,
    //     value: 0.8,
    //     step: 0.05,
    //     min: 0,
    //     max: 1
    // });

    // osd_opSlider.attachEvent("onChange", function(value) {
    //     $(".osdTileClass").css('opacity', value);
    // });

    // configure_osd('osd_container');

    // var iconsPath = {
    //     dhx_skyblue: "imgs",
    //     dhx_web: "icons_web",
    //     dhx_terrace: "icons_terrace"
    // };
    // //Also create an OSD container

    // isbi_tabbar = new dhtmlXTabBar({
    //     parent: "isbi_tabbar",
    //     skin: 'dhx_skyblue'
    // })


    // isbi_tabbar.addTab("a1", "Phase 1", null, null, true);
    // isbi_tabbar.addTab("a2", "Phase 2");
    // isbi_tabbar.addTab("a3", "Phase 3");
    // isbi_tabbar.addTab("a4", "Info");
    // isbi_tabbar.addTab("a5", "Detailed Image"); //May debate hiding this until an image is clicked?
    // isbi_tabbar.addTab("a6", "MultiRater Viewer"); //May debate hiding this until an image is clicked?


    // //Above creates the tabs, this actually assigns the tabs to the objects
    // isbi_tabbar.tabs("a1").attachObject("tabphase1");
    // isbi_tabbar.tabs("a2").attachObject("tabphase2");
    // isbi_tabbar.tabs("a3").attachObject("tabphase3");
    // isbi_tabbar.tabs("a4").attachObject("tab_info");
    // isbi_tabbar.tabs("a5").attachObject("tab_zoomed");


    // //Add click handlers for the OSD Visualization buttons //
    // $("#btn_osd_globules").click(function() { osd_colorTiles(this.id,this.style) });
    // $("#btn_osd_streaks").click(function() { osd_colorTiles(this.id,this.style) });

}
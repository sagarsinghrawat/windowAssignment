$(document).ready( function(){

    $("#div1").accordion({
        collapsible: true,
        active: false,
        animate: 1000,
        heightStyle: true,
        icons: {header: "ui-icon-plus", activeHeader: "ui-icon-minus"}
    });

    $(".img1").tooltip({
        //title: "C++ Programming language",
        track: true,
        show :{ effect:"bounce", duration: 2000},
        //hide :{ effect:"explode", duration: 3000}
    });
})

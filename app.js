$(document).ready( function(){

    $("#div1").accordion({
        collapsible: true,
        active: false,
        animate: 1000,
        heightStyle: true,
        icons: {header: "ui-icon-plus", activeHeader: "ui-icon-minus"}
    });

    $(".img1").tooltip({

        track: true,
        show :{ effect:"bounce", duration: 2200},
        //hide :{ effect:"explode", duration: 3000}
    });
})

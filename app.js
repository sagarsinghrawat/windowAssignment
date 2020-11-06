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
    });    
})

function myOverfunction(){
    var prop = document.getElementById('heading1');
    prop.style.color = "black"
    prop.style.fontSize = "50px"
    prop.style.textShadow = "2px 2px #FF0000"
}

function myOutfunction(){

    var prop = document.getElementById('heading1');
    prop.style.color = "navy"
    prop.style.fontSize = "50px"
    prop.style.textShadow = "0px 0px 0px"
}

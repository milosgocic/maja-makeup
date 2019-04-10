
/*** animate.css ***/

$(".js--wp1").waypoint(function(direction) {
    $(".js--wp1").addClass("animated fadeInDown");
}, {
 offset: "80%;"
});
$(".js--wp2").waypoint(function(direction) {
    $(".js--wp2").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp3").waypoint(function(direction) {
    $(".js--wp3").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp4").waypoint(function(direction) {
    $(".js--wp4").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp5").waypoint(function(direction) {
    $(".js--wp5").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp6").waypoint(function(direction) {
    $(".js--wp6").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp7").waypoint(function(direction) {
    $(".js--wp7").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp8").waypoint(function(direction) {
    $(".js--wp8").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp9").waypoint(function(direction) {
    $(".js--wp9").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp10").waypoint(function(direction) {
    $(".js--wp10").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp11").waypoint(function(direction) {
    $(".js--wp11").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});
$(".js--wp12").waypoint(function(direction) {
    $(".js--wp12").addClass("animated fadeInUp");
}, {
 offset: "50%;"
});

/*** scroll ***/

$(".js--scroll-works").click(function(){
    $("html, body").animate({scrollTop: $("#secondpg").offset().top}, 1000);
});
$(".js--scroll-contact").click(function(){
    $("html, body").animate({scrollTop: $("#thirdpg").offset().top}, 1500);
});

/*** sticky ***/

$(".js-nav").waypoint(function(direction) {
    if (direction == "down") {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
    
    }, {
    offset: "120px;"
});
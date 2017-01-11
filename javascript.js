// JavaScript File
$(document).ready(function(){
   $("#home-content").show(); 
});

$("#home-button").click(function(){
    $(".all-content").hide();
    $("#home-content").show();
});

$("#about-us-button").click(function(){
    $("#home-content").hide();
    $("#about-us-content").show();
});

$
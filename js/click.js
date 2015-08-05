
// some click functionalities

/*********************************************************************************/


// collects click location plus ip of country and puts it into datastore
$(function() { //what does this mean
$("#main").click(function(loc) {
  var offset = $(this).offset();
  var relativeX = (loc.pageX - offset.left);
  var relativeY = (loc.pageY - offset.top);
  var click_pair = relativeX +" " +relativeY
  $.getJSON("http://freegeoip.net/json/", function (data) {
    var country = data.country_name;
    console.log(country, click_pair)
    $.post( "/", { click: click_pair, country: country } );
  });
});
}); //thanks to css tricks and stack overflow for parts of this code



function whereFrom() {
	$.getJSON("http://freegeoip.net/json/", function (data) {
    var country_on_load = data.country_name;
    var click_0 = "0 0"
    console.log(country_on_load, click_0)
    $.post( "/", { click: click_0, country: country_on_load } );
  });

}
window.addEventListener('load', whereFrom);

// try to import json

// var my_json;
// $.getJSON('json/minijson.json', function(json) {
//   my_json = json;
//   console.log(my_json)
// });


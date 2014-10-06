var plainIcon = L.icon({
	iconUrl: 'img/hive-pin.png',
    // shadowUrl: 'leaf-shadow',

    iconSize:     [60, 55], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 50], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});




var map = L.map('map').setView([51.505, -0.09], 23);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/sahil-ansari.j2ijd3hf/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18
}).addTo(map);

// L.marker([51.5, -0.09], {icon: plainIcon}).addTo(map);


var long=37.333577;
var lat=-121.882744;





$(document).ready(function getUserLocation() { 

//check if the geolocation object is supported, if so get position
if (navigator.geolocation)
	navigator.geolocation.getCurrentPosition(displayLocation, displayError);
else
	document.getElementById("locationData").innerHTML = "Sorry - your browser doesn't support geolocation!";
}




);

function displayLocation(position) { 
	long=position.coords.longitude;
	lat=position.coords.latitude;

//build text string including co-ordinate data passed in parameter
var displayText = "User latitude is " + position.coords.latitude + " and longitude is " + position.coords.longitude;

//display the string for demonstration
// map.setView([position.coords.latitude, position.coords.longitude], 43);


};


function displayError(error) { 

};

function getLong(){
	return lat;
}


function getLat(){
	return long;
}




//originally from http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
function formatCurrency(n, c, d, t) {
    "use strict";

    var s, i, j;

    c = isNaN(c = Math.abs(c)) ? 2 : c;
    d = d === undefined ? "." : d;
    t = t === undefined ? "," : t;

    s = n < 0 ? "-" : "";
    i = parseInt(n = Math.abs(+n || 0).toFixed(c), 10) + "";
    j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

/**
 * Thermometer Progress meter.
 * This function will update the progress element in the "thermometer"
 * to the updated percentage.
 * If no parameters are passed in it will read them from the DOM
 *
 * @param {Number} goalAmount The Goal amount, this represents the 100% mark
 * @param {Number} progressAmount The progress amount is the current amount
 * @param {Boolean} animate Whether to animate the height or not
 *
 */
function thermometer(goalAmount, progressAmount, animate) {
    "use strict";
    console.log("making");

    var $thermo = $("#thermometer"),
        $progress = $(".progress", $thermo),
        $goal = $(".goal", $thermo),
        percentageAmount;

    goalAmount = goalAmount || parseFloat( $goal.text() ),
    progressAmount = progressAmount || parseFloat( $progress.text() ),
    percentageAmount =  Math.min( Math.round(progressAmount / goalAmount * 1000) / 10, 100); //make sure we have 1 decimal point

    //let's format the numbers and put them back in the DOM
    $goal.find(".amount").text( "$" + formatCurrency( goalAmount ) );
    $progress.find(".amount").text( "$" + formatCurrency( progressAmount ) );


    //let's set the progress indicator
    $progress.find(".amount").hide();
    if (animate !== false) {
        $progress.animate({
            "height": percentageAmount + "%"
        }, 1200, function(){
            $(this).find(".amount").fadeIn(500);
        });
    }
    else {
        $progress.css({
            "height": percentageAmount + "%"
        });
        $progress.find(".amount").fadeIn(500);
    }
}

function makeProgress(){
	c
    //call without the parameters to have it read from the DOM
    thermometer();
    // or with parameters if you want to update it using JavaScript.
    // you can update it live, and choose whether to show the animation
    // (which you might not if the updates are relatively small)
    //thermometer( 1000000, 425610, false );

}




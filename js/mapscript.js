var map = L.map('map').setView([36, -115], 9);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'rwhitely.obddm6mj',
    accessToken: 'pk.eyJ1IjoicndoaXRlbHkiLCJhIjoiY2loM211bGgyMHlkNzY1bTBoOHFrOGdicSJ9.o5fLAcvBBPoRtlyM17CZ-Q'
}).addTo(map);

for ( var i=0; i < places.length; ++i ) {
	L.marker( [places[i].latitude, places[i].longitude] )
	.bindPopup( '<h2>' + places[i].placeName + '</h2>' + '<p>' + places[i].descrip + '</p>' )
	.addTo( map );
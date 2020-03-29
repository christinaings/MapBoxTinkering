var markers = [];
var addingHouseMarker = false;

var longlat = new mapboxgl.LngLat(-1.2465,51.7612);

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5haW5ncyIsImEiOiJjazhhOW8zazEwMDN1M2VtajcyNjZsZjNvIn0.YoSM_noeQ-7UgRY5UzPY8g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: longlat,
    zoom: 10
                
});

map.on('click',function(e){
                
    if (!addingHouseMarker)
        return;

    var el = document.createElement('div');
    el.className = 'house-marker';

    el.addEventListener('click', function(){
        window.alert("this worked!")
    });

    var marker = new mapboxgl.Marker(el).setLngLat(e.lngLat).addTo(map);
    console.log(marker);
    addingHouseMarker = false;
    this.markers += (marker);
});

function addHouseMarker(){
    addingHouseMarker = true;
}
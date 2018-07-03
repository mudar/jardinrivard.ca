function initMap() {
  var jardinLatLng = new google.maps.LatLng(45.525510, -73.584670);
  var mapOptions = {
    center: jardinLatLng,
    zoom: 16,
    mapTypeControl: false,
    styles: [
      {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444"}]},
      {"featureType":"landscape","stylers":[{"color":"#f2f2f2"}]},
      {"featureType":"poi","stylers":[{"visibility":"off"}]},
      {"featureType":"poi.park","stylers":[{"visibility":"on"}]},
      {"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#c5e1a5"}]},
      {"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},
      {"featureType":"road.arterial","stylers":[{"visibility":"simplified"}]},
      {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
      {"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"lightness":"-30"}]},
      {"featureType":"road.local","stylers":[{"visibility":"simplified"}]},
      {"featureType":"transit","stylers":[{"visibility":"off"}]},
      {"featureType":"transit.station.rail","stylers":[{"visibility":"on"}]},
      {"featureType":"transit.station.rail","elementType":"labels.text","stylers":[{"color":"#027eb2"},{"visibility":"simplified"}]},
      {"featureType":"water","stylers":[{"color":"#bbdefb"},{"visibility":"on"}]}
    ]
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: jardinLatLng,
    map: map,
    title: 'Jardin Rivard'
  });
};

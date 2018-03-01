function initMap() {
	var ucsd_lting = {lat:32.878902, lng:-117.235966};

  var map = new google.maps.Map(document.getElementById('map'),{
    center: ucsd_lting,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: ucsd_lting,
    map:map,
    title: 'UCSD'
  });
}

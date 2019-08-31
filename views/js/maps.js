const map = new Array([]);
const mapMarker = new Array([]);
const ltd = document.querySelectorAll('#ltd');
const lngt = document.querySelectorAll('#lngt');
const hTitle = document.querySelectorAll('#hosTitle');

  function initMap() {
  
    var mapCenter = new google.maps.LatLng(-33.865143, 151.209900); // Sydney
    
    var mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      center: mapCenter,
      fullscreenControl: false 
    };
    
    // Generate First Map
    for(var i=0; i<= map.length ; i++){
		mapOptions.center = new google.maps.LatLng(ltd[i].innerHTML, lngt[i].innerHTML);
		map[i] = new google.maps.Map(document.querySelectorAll("#map")[i], mapOptions);
		mapMarker[i] = new google.maps.Marker({
    		position: mapOptions.center,
    		title: 'hTitle.innerHTML'
		});
		mapMarker[i].setMap(map[i]);
	}
  }
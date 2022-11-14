function initMap() {
    // The location of Uluru
    const uluru = { lat: 33.986217, lng: -81.053744 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      mapId: '2030cb673b24c860',
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
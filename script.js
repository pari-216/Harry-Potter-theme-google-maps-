// script.js

function initMap() {
  // 1. Map options: center over UK (adjust if you want)
  const mapOptions = {
    center: { lat: 54.5973, lng: -5.9301 }, // example: near Belfast; change if desired
    zoom: 6,
    mapId: "767fa947b99684f8344b65b9", // the Marauder-style map ID from Cloud Console
    disableDefaultUI: false,
    gestureHandling: "greedy",
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // 2. Wizarding world locations
  const places = [
    {
      name: "Hogwarts School of Witchcraft and Wizardry",
      position: { lat: 56.8198, lng: -5.1052 }, // near Glenfinnan Viaduct area
      icon: "img/hogwarts.png",
    },
    {
      name: "Hogsmeade Village",
      position: { lat: 56.8185, lng: -5.1100 },
      icon: "img/hogsmeade.png",
    },
    {
      name: "Diagon Alley (London)",
      position: { lat: 51.5138, lng: -0.0984 },
      icon: "img/diagon-alley.png",
    },
    {
      name: "Ministry of Magic",
      position: { lat: 51.5010, lng: -0.1246 },
      icon: "img/ministry.png",
    },
    {
      name: "Platform 9 ¾",
      position: { lat: 51.5321, lng: -0.1238 },
      icon: "img/platform.png",
    },
  ];

  // 3. Add custom markers
  places.forEach((place) => {
    new google.maps.Marker({
      position: place.position,
      map,
      title: place.name,
      icon: {
        url: place.icon,
        scaledSize: new google.maps.Size(48, 48), // adjust icon size
      },
      animation: google.maps.Animation.DROP,
    });
  });
}

// Make sure initMap is global for the callback
window.initMap = initMap;

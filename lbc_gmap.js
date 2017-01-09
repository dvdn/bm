var partedCities=['paris','lyon', 'marseille'], locationData = "", gmapUrl = "https://maps.google.fr/maps?q=france+", zoom = 7, fullgmapUrl = "";
locationData = $(".line_city .value").text().toLowerCase();

for each (var city in partedCities) {  
  if (locationData.indexOf(city) > -1) {
    zoom = 12
  }
}

if ($("#gmap-insert").length == 0) {
  fullgmapUrl = gmapUrl + locationData + "&z=" + zoom;
  $(".line_city").prepend('<div id="gmap-insert" width="100%" height="320px" align="right"><iframe width="60%" height="320px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + fullgmapUrl + '&amp;iwloc=&amp;output=embed"></iframe></div>');
}

var locationData = "", gmapUrl = "https://maps.google.fr/maps?q=france+", zoom = 8, fullgmapUrl = "";
locationData = $(".line_city .value").text().toLowerCase();
if (locationData.indexOf('paris')> -1) {
    zoom = 12
}
fullgmapUrl = gmapUrl + locationData + "&z=" + zoom;
$(".line_city").prepend('<div width="100%" height="320px" align="right"><iframe width="60%" height="320px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + fullgmapUrl + '&amp;iwloc=&amp;output=embed"></iframe></div>');

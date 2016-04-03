$('div[class*="apn-"]').remove();
$('#footer').remove();
$('#listingAds').removeClass('grid-3-1');
$('.item_imageNumber').remove();

$('.headerContent').css({
    padding : 0,
    height : '35px'
});
$('.header').css('height', '35px');
$('.headerNav a').css('font-size', '1em');
$('.content-center').css({
  'max-width': '1200px'
});
$('ul.tabsContent').css({
    'min-height': '280px',
    background: '#fafafa'
});
$('a.list_item').css({
    width : '190px',
    height : '260px',
    float : 'left',
    overflow : 'hidden',  
    'border-right': '1px dotted silver',
    'border-bottom': '1px dotted silver'
});
$('.item_image').css({
    width : '100%'
});
$('.item_infos').css({
    padding : '0',
    'width' : '100%'
});
$('.item_infos *').css({
    'font-size' : '1em'
});
$('.item_infos h2').css({
    'font-size' : '1.2em',
    'max-height' : '65px',
    overflow : 'hidden'
});
$('.item_price').css({
    float : 'left',
    'font-size' : '1.1em',
});
$('.list.mainList.tabs').append('<span style="width: 100%; float: left; align: right" class=\'author\'>by <a target="_blank" href="http://dvdn.github.io/bm/">dvdn</a></span>');

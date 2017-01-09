$('div[class*="apn-"]').remove();
$('#footer').remove();
$('#listingAds').removeClass('grid-3-1');
$('.item_imageNumber').remove();

$('.headerContent').css({
    'padding' : 0,
    'height' : '35px'
});
$('.header').css('height', '35px');
$('.headerNav a').css('font-size', '1em');
$('.content-center').css({
  'max-width': '1200px'
});
$('ul.tabsContent').css({
    'min-height': '1561px',
    'background': '#fafafa'
});
$('a.list_item').css({
    'width' : '197px',
    'height' : '260px',
    'float' : 'left',
    'overflow' : 'hidden',  
    'border-right': '1px dotted silver',
    'border-bottom': '1px dotted silver'
});
$('.item_image').css({
    'width' : '100%'
});
$('.item_infos').css({
    'padding' : '0',
    'width' : '100%'
});
$('.item_infos *').css({
    'margin' : 0,
    'font-size' : '0.9em'
});
$('.item_infos h2').css({
    'margin' : '2px 0 3px 0',
    'font-size' : '1.1em',
    'max-height' : '65px',
    'overflow' : 'hidden'
});
$('.item_price').css({
    'position': 'absolute',
    'float' : 'left',
  'margin-top': '2px',
    'font-size' : '1.1em',
});
$('aside.item_absolute').css({
  'float' : 'right',
  'position': 'relative',
  'padding-top': '6px'
});

$('aside.sidebar').remove();
$('.list.mainList.tabs').append('<span style="width: 100%; float: left; align: right" class=\'author\'>by <a target="_blank" href="http://dvdn.github.io/bm/">dvdn</a></span>');

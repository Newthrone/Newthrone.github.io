if($(window).width() < 850){
    $('.equip .row').slick({
        slidesToShow: 1,
        nextArrow: '<div class="more-equip"><a>Ещё больше товаров</a></div>',
        prevArrow: ''
    });

    $('.reviews-gallery').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        variableWidth: false,
        adaptiveHeight: true
    });
}
else {
    $('.equip .row').slick({
        slidesToShow: 5,
        nextArrow: '<div class="more-equip"><a>Ещё больше товаров</a></div>',
        prevArrow: ''
    });

    $('.reviews-gallery').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        variableWidth: false,
        adaptiveHeight: true
    });
}

$('.boilers-gallery').slick();
$('.boilers-slider').slick({
    dots: true,
    arrows: false,
});
$("#menu").on("click","a", function (event) {
    event.preventDefault();
    $('#menu').modal( "hide" );
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
});

function initMap() {
    var position_1 = {lat: -25.344, lng: 131.036};
    var contacts_map = new google.maps.Map(
        document.getElementById('contacts-map'), {zoom: 4, center: position_1});
    new google.maps.Marker({position: position_1, map: contacts_map});

    var position_2 = {lat: -25.344, lng: 131.036};
    var service_center_2_map = new google.maps.Map(
        document.getElementById('service-center-2-map'), {zoom: 4, center: position_2});
    new google.maps.Marker({position: position_2, map: service_center_2_map});
}

$(document).scroll(function() {
    var cutoff = $(window).scrollTop();
    var cutoffRange = cutoff + 200;

    // Find current section and highlight nav menu
    var curSec = $.find('.current');
    var curID = $(curSec).attr('id');
    var curNav = $.find('a[name='+curID+']');
    $(curNav).addClass('active');

    $('section').each(function(){
        if($(this).offset().top + $(this).height() > cutoff){
            $('section').removeClass('current')
            $(this).addClass('current');
            return false; // stops the iteration after the first one on screen
        }
    });
    $('#position-name').html($('section.current').attr('data-name'));
    $('#position-number strong').html($('section.current').attr('data-number'));
});

(function($) {
    $(function() {

        $('ul.articles-list-group').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tab-pane').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
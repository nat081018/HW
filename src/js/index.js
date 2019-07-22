var $ = require('jquery');
 
var mixitup = require('mixitup');
var slick = require('slick-carousel');
var ionRangeSlider = require('ion-rangeslider');
var slickNav = require('./jquery.slicknav.min.js');
var mixer = mixitup('.tabs__items-container',{
    load: {
        filter: '.all',
    },

});

$('.js-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots : true,
});

$(function()
{
    $('.range').ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        grid: false,
        step: 100
    });

    $('#menu').slicknav({
  
    });

    $('input, select');
});





var $ = require('jquery');
 
var mixitup = require('mixitup');
var slick = require('slick-carousel');
var ionRangeSlider = require('ion-rangeslider');
var slickNav = require('./jquery.slicknav.min.js');
var mixer = mixitup('.tabs__items-container',{
    load: {
        filter: '.all'

    }
});

$('.js-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots : true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });





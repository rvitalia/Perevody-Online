$('#select_money_receive').ddslick({
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});
$('#select_money_contry').ddslick({
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});
$('#select_money_valuta').ddslick({
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});
$(function () {
    $("#accordion").accordion();
});
$('#partners__slider').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '60px',
    dots: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            centerPadding: '0',
            centerMode: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '40px',
          }
        }
      ]
})

$('.review__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          }
        }
      ]
  });

  $('.help__inner__item-mobile').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  })
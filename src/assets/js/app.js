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
    // centerMode: true,
    arrows: false,
    centerPadding: '60px',
    dots: true,
})

$('.review__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
$(function() {

  /* ---------------------------------------------- /*
*   タイピング風タイトル
/* ---------------------------------------------- */
  $(window).on('load', function () {

    $('.typ').children().andSelf().contents().each(function () {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
      }
    });

    $('.typ').css({ 'opacity': 1 });
    for (var i = 0; i <= $('.typ').children().size(); i++) {
      $('.typ').children('span:eq(' + i + ')').delay(80 * i).animate({ 'opacity': 1 }, 0);
    };
  });

  /* ---------------------------------------------- /*
*   スクロールフェード
/* ---------------------------------------------- */
  $(window).on('scroll', function () {

    $('.effect-fade').each(function() {
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      const elemPos = $(this).offset().top;
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('effect-scroll');
        }
    });
  });




});

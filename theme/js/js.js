(function ($) {

  $(window).load(function(){
    var $btn = $('.btn-recall'),
      $form = $('.popup .form'),
      $thx = $('.popup .thanks'),
      $close  =$('.btn-close'),
      $back  = $('.bg-black');

    $btn.on('click', function(e){
      e.preventDefault();

      $form.addClass('active');
      $back.addClass('active');
    })

    $close.on('click touch', function(){
      $form.removeClass('active');
      $back.removeClass('active');
      $thx.removeClass('active');
    });

    $back.on('click touch', function(){
      $form.removeClass('active');
      $back.removeClass('active');
      $thx.removeClass('active');
    })
  });

})(jQuery);


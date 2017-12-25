/* Слайдер категорий */
$(document).ready(function(){

   // Слайдер
  if($('#cats-carousel').length>0){
   var numTags = $('#cats-carousel').children().length;
   console.log(numTags);
   if ( numTags > 4) {
        var navSwiper = new Swiper ('.cats-slider', {
        speed: 150,
        loop: true,
        slidesPerView: 4
      });
      } else {
        var navSwiper = new Swiper ('.cats-slider', {
        speed: 150,
        slidesPerView: 4,

      })
        $('.cat_s-right_b').hide();
        $('.cat_s-left_b').hide();
    }
    
    $('.cat_s-right_b').click(function(){
      navSwiper.slideNext(150);
    });
    $('.cat_s-left_b').click(function(){
      navSwiper.slidePrev(150);
    });
  }
});
/* Запуск видео при клике на плей в whatis */
  $(document).ready(function(){
    $(".video-play").click(function(){
        var video = $(this).attr('data-video');
        var srca = $(video).attr('src');
        $(video).attr('src', srca + '?modestbranding=0&amp;showinfo=0&amp;rel=0&amp;loop=1&autoplay=1');
        console.log(video);
        $(video + "-preview").hide();
        $(video).show();
        
    });
  });

/* Запуск видео в главном экране */
    $(document).ready(function(){
      $(".videoq-overlay").click(function(){
        var videosrc = $(this).attr('data-video-src');
        $('.videoq-main').attr('src', videosrc + '?modestbranding=0&amp;showinfo=0&amp;rel=0&amp;loop=1&autoplay=1')
        $('.videoq-preview').hide();
        $('.videoq-main').show();
        var text = $(this).siblings("p").html();
        var h4text = $(this).siblings("h4").html();
        $('.videoq-mb p').html(text);
        $('.videoq-mb h4').html(h4text);
        var scroll = $('.videoq').position().top;
        $("html, body").animate({scrollTop: scroll}, 1000);
      });
      $(".quest-video div").click(function(){
        var videosrc = $(this).attr('data-video-src');
        console.log(videosrc);
        $('.videoq-main').attr('src', videosrc + '?modestbranding=0&amp;showinfo=0&amp;rel=0&amp;loop=1&autoplay=1')
        $('.videoq-preview').hide();
        $('.videoq-main').show();
        var scroll = $('.videoq').position().top;
        $("html, body").animate({scrollTop: scroll}, 1000);
      });
      $(".mobile-quest-video-bg").click(function(){
        var videosrc = $(this).attr('data-video-src');
        console.log(videosrc);
        $('.videoq-main').attr('src', videosrc + '?modestbranding=0&amp;showinfo=0&amp;rel=0&amp;loop=1&autoplay=1')
        $('.videoq-preview').hide();
        $('.videoq-main').show();
        var scroll = $('.videoq').position().top;
        $("html, body").animate({scrollTop: scroll}, 1000);
      });
    });

/* Плавающая менюшка */
    $(window).scroll(function(){
       if (($(window).scrollTop() - 28) >= 100 ) {
        $("#nav-fixed").addClass('navigation-sticky');
    } else {
            $("#nav-fixed").removeClass('navigation-sticky');
        }
    })
/* Формы */
$(document).ready(function(){
    $("#form-subscribe").validate({
      rules: {
      email:{
        required: true,
        email: true
      }
    },
    messages: {
      email:{
        required: "Пожалуйста, введите email",
        email: "Некорректный email"
      }
    },
    submitHandler: function() {
    $("#modal-subscribe").modal('show');
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $("#form-subscribe").serialize()
    }).done(function() {
      $(this).find("input").val("");
      $("#form-subscribe").trigger("reset");
    });
  }
    });
});
$(document).ready(function(){
$("#form-new").validate({
      rules: {
      email:{
        required: true,
        email: true
      },
      phone:{
        required: true,
        minlength: 7
      }
    },
    messages: {
      email:{
        required: "Пожалуйста, введите email",
        email: "Некорректный email"
      },
      phone:{
        required: "Пожалуйста, введите номер",
        minlength: "Введите корректный номер"
      }
    },
    submitHandler: function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $("#form-new").serialize()
    }).done(function() {
      $(this).find("input").val("");
      $("#form-new").trigger("reset");
    });
  }
    });
});

$(document).ready(function(){
    $("#form-phone").validate({
      rules: {
      phone:{
        required: true,
        minlength: 7
      }
    },
    messages: {
      phone:{
        required: "Пожалуйста, введите номер",
        minlength: "Введите корректный номер"
      }
    },
    submitHandler: function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $("#form-phone").serialize()
    }).done(function() {
    $("#modal-phone").modal('hide');
    $("#modal-phone-result").modal('show');
      $(this).find("input").val("");
      $("#form-phone").trigger("reset");
    });
  }
    });
});
/* Плавный скролл */
$(document).ready(function(){
  $(".slicy").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });
});
/* Авто высота */
$(document).ready(function(){
$('#region').on('show.bs.modal', function (e) {
  var DeviceWidth = $(window).width();
  if ($(window).width() > 1099) {
  $('#region-cities').height(4 * Math.ceil($('#region-cities').children().length / 6) + 'rem');
} else if ($(window).width() > 479) {
  $('#region-cities').height(4 * Math.ceil($('#region-cities').children().length / 2) + 'rem');
} else {
  $('#region-cities').height('auto');
}
});
$(window).resize(function(e){
  var DeviceWidth = $(window).width();
  if ($(window).width() > 1099) {
  $('#region-cities').height(4 * Math.ceil($('#region-cities').children().length / 6) + 'rem');
} else if ($(window).width() > 479) {
  $('#region-cities').height(4 * Math.ceil($('#region-cities').children().length / 2) + 'rem');
} else {
  $('#region-cities').height('auto');
}
})
});
// Модалка оплаты
$(document).ready(function(){
  var cardSum = $('#card-sum');
  var initialPrice = 0;

  $('.cards-offer a').click(function(){
    var price = $(this).attr('data-price');
    var cardName = $(this).children('.cards-name').text();
    $('#card-name').html(cardName);
    cardSum.text(price);
    initialPrice = price;
  });

  $('#form-card input[name="var-delivery"]').on('change', function(){
    if ($(this).attr('data-added-price')) {
      var newPrice = +initialPrice + +$(this).attr('data-added-price');
      cardSum.text(newPrice);
    } else {
      cardSum.text(initialPrice);
    }
  });

});
$('.sub-menu').click(function() {
  $('.sub-menu span').toggleClass('active');
  $('.grid-main-ct').toggleClass('hidden');
  $('.navbar').toggleClass('onScreen');
});
$('.onSubmenu-mobile').click(function() {
  $(this).nextAll('.sub-ct').slideToggle();
});
$(document).ready(function() {
  if($('.navbar').height() >= $(window).height()) {
    $('.navbar .navbar-menu').addClass('onScroll');
    
  } else {
    $('.navbar .navbar-menu').removeClass('onScroll');
    
  }
});
function scrollActive() {
  let scrollTop = $(window).scrollTop();
  $('.main-tab .item').each(function() {
    let item_src = $(this).data("src");
    if(item_src) {
      let offset = $(item_src).offset().top - 100;
      if(scrollTop >= offset) {
        $('.main-tab .item').removeClass('active');
        $('.main-tab .item[data-src = ' + item_src + ']').addClass('active');
      }
    }
  });
}
scrollActive();
$(window).on('scroll', function () {
  scrollActive();
});
$('.main-tab .item').click(function() {
  let item_src = $(this).data("src");
  if(item_src.length) {
    let offset = $(item_src).offset().top;
    $("html, body").animate({scrollTop: offset}, 0);
    $('.main-tab .item').removeClass('active');
    $(this).addClass('active');
  }
});
function resizeImage(img, ratio) {
  $(img).height($(img).width() * ratio);
}
$(document).ready(function() {
  resizeImage('.wrapper .open-wine .items img', 1/1);
  resizeImage('.wine_st_it_img', 1/1);
});

$('.pro_sl_nav_it').click(function () {
  var img = $(this).find('.pro_nav_it_img').data('src');
  var name = $(this).find('.pro_nav_it_tx p').text();
  var url = $(this).attr('href');
  $('.pro_for_it_img img').attr('src', img);
  $('.pro_for_name').text(name);
  $('.pro_for_it_img').attr('href', url);
  $('.pro_for_it_tx').attr('href', url);
  $('.pro_sl_nav_it').removeClass('active');
  $(this).addClass('active');
});
$('.pro_dtl_3_sub span').click(function() {
  if($(this).parent('.pro_dtl_3_sub').children('.pro_3_tx').css('display') === 'block') {
    $(this).parent('.pro_dtl_3_sub').children('.pro_3_tx').stop().slideToggle();
  } else {
    $('.pro_dtl_3_sub').children('.pro_3_tx').each(function() {
      if($(this).css('display') === 'block') {
        $(this).stop().slideToggle();
      }
    });
    $(this).parent('.pro_dtl_3_sub').children('.pro_3_tx').slideToggle();
  }
});

let mn_fixed = function() {
  let scrollTop = $(window).scrollTop();
  if(scrollTop >= $(window).height()) {
    $('.menu-fixed').addClass('fixed');
    $('.sub-menu').addClass('black');
    $('.int_br_mn_mb').addClass('active');
  } else {
    $('.menu-fixed').removeClass('fixed');
    $('.sub-menu').removeClass('black');
    $('.int_br_mn_mb').removeClass('active');
  }
  $('.cte_int').addClass('fixed');
  $('.cte_grp').each(function() {
    let dtaSrc = $(this).data('src');
    if(dtaSrc) {
      let offset = $(this).offset().top - 70;
      if(scrollTop >= offset) {
        $('.main-tab .item').removeClass('active');
        $('.main-tab .item[id='+ dtaSrc +']').addClass('active');
      }
    }
  });
  $('.wine_chil').each(function() {
    let dtaSrc = $(this).data('src');
    if(dtaSrc) {
      let offset = $(this).offset().top - 70;
      if(scrollTop >= offset) {
        $('.main-tab .item').removeClass('active');
        $('.main-tab .item[id='+ dtaSrc +']').addClass('active');
      }
    }
  });
  $('.int_br').each(function() {
    let dtaSrc = $(this).data('src');
    if(dtaSrc) {
      let offset = $(this).offset().top - 70;
      if(scrollTop >= offset) {
        $('.main-tab .item').removeClass('active');
        $('.main-tab .item[id='+ dtaSrc +']').addClass('active');
      }
    }
  });
}
mn_fixed();
$(window).on('scroll', function() {
  mn_fixed();
});
$('.menu-fixed-mobile').addClass('active');
$('.menu-fixed-mobile .drop-btn').click(function() {
  $('.menu-fixed-mobile .list-item').toggleClass('active');
});


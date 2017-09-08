$(function() {
  /*scroll 顶部动画*/
  $(document).on('scroll', function(e) {
    $('.bigvideo').addClass('close')
    $('.banner-wraper').addClass('banner-samll')
    $('.smallvideo').addClass('active')
    $('.banner').addClass('small')
    $('.slogan').addClass('active')
    $('.slogan>p').addClass('active')
    /*middlemenu固定标题栏*/
    if ($(document).scrollTop() > 400) {
      $('.middlemenu').addClass('fixation')
    } else {
      $('.middlemenu').removeClass('fixation')
    }
  });
  //  $('.menuul').on('click', '.liacitve', function(e) {
  //  let $li = $(e.currentTarget)
  //  let $index = $li.index('.liacitve')
  //  $li.addClass('active').siblings('.active').removeClass('active')
  //  let warpertab=$li.parent().parent().next().children().eq($index).addClass('active').siblings('.active').removeClass('active')
  // })
  $('.menuul>.liacitve').each(function(index) {
    $(this).on('click', function() {
      $('.menuul>.liacitve').removeClass('active').eq(index).addClass('active')
      $('.asd').fadeOut().eq(index).fadeIn()
    })
  })
  /*carouseltop 轮播组件*/
  $('.promo-trigger>span').on('mouseenter', function(e) {
    let $span = $(e.currentTarget)
    let $index = $span.index()
    go($index)
  })

  function go(index) {
    let width = $('.photoul>li').width()
    $('.promo-trigger>span').removeClass('active').eq(index).addClass('active')
    $('.photoul').css({
      transform: 'translateX(' + (-width * index) + 'px)'
    });
  }
  /*自动轮播*/
  let current = 0

  function autoPlay() {
    let nextcurrent = current + 1
    if (nextcurrent === 5) {
      nextcurrent = 0
    }
    go(nextcurrent)
    current = nextcurrent
  }
  var timer = setInterval(autoPlay, 4000)
  $('.carouseltop').mouseenter(function(event) {
    clearInterval(timer)
  });
  $('.carouseltop').mouseleave(function(event) {
    clearInterval(timer)
    timer = setInterval(autoPlay, 4000)
  });

  /*carouselmiddle Tab组件*/
  $('.message>li').on('mouseenter', function(e) {
    let li = $(e.currentTarget)
    let index = li.index()
    $(this).addClass('active').siblings('.active').removeClass('active')
    $('.news-content').removeClass('active').eq(index).addClass('active')
  })
  /*carouselside Tab组件*/
  $('.carouselside>ul>li').on('mouseenter', function(e) {
    let li = $(e.currentTarget)
    let index = li.index()
    $(this).addClass('active').siblings('.active').removeClass('active')
    $('.img-content').children().removeClass('active').eq(index).addClass('active')
    $('.bottomwarper').css('display', 'block');
  })
  /*carouselbottom Tab组件*/
  $('.bottomcontent>ul>li').on('mouseenter', function(e) {
    let li = $(e.currentTarget)
    let index = li.index()
    $(this).addClass('active').siblings('.active').removeClass('active')
    $('.carouselbottom').children('#NextLink').removeClass('active').eq(index).addClass('active')
  })
  /*videoplay 播放视频组件*/
  $('.btnplayvideo').on('click', function(e) {
    $('.videoplay').addClass('active')
  })
  $('.pop-close').on('click', function(e) {
    $('.videoplay').removeClass('active')
  })
})

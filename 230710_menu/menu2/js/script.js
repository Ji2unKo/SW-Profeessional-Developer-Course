$('.main-menu li, .submenu-wrapper').hover(function(){
  // hover시 실행 할 함수
  $('.submenu-wrapper').stop().slideDown(500);
}, function(){
  // leave 됐을 때 실행 할 함수
  $('.submenu-wrapper').stop().slideUp(500);
})

$('.submenu-list > li').hover(function(){
  // .submenu-list > li 4개 중 hover된
  // 자신의 index 번호를 i라는 변수에 저장
  let i = $(this).index();
  // console.log(i)
  // eq() : index 번호로 어떤 요소를 찾을 때 사용
  $('.main-menu').find('a').eq(i).addClass('on')
}, function(){
  let i = $(this).index();
  $('.main-menu').find('a').eq(i).removeClass('on')
})
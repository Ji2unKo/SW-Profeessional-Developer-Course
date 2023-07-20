// open-btn click시 .modal-box fadeIn()
$('.open-btn').click(function(){
  // fadeIn(), fadeOut
  // jQuery에서 애니메이션 효과를 만드는 메서드
  $('.modal-box').fadeIn()
  $('.overlay').fadeIn()
  // $('.overlay').addClass('.is-active');
})

// modal-close click시 .modal-box, overlay fadeOut()
$('.modal-close').click(function(){
  $('.modal-box').fadeOut()
  $('.overlay').fadeOut()
})

// 내가 클릭한 이미지를 모달창으로 띄우는 코드를 작성
// .modal-list img를 클릭 했을 때 그 클릭된 이미지의 src, alt값을 가져온다.
// 속성 값을 가져올 때는 attr 이라는 메서드를 사용한다
$('.modal-list img').click(function(){
  let 이미지경로 = $(this).attr('src');
  let 대체텍스트 = $(this).attr('.alt');

  // 클릭된 요소의 src, alt값이 담긴 변수 
  // .img-modal-wrapper src, alt값으로 넣어준다.
  $('.img-modal-wrapper').attr({
    src : 이미지경로,
    alt : 대체텍스트
  })

  // .img-modal-box, .overlay를 fadeIn()
  $('.img-modal-box').fadeIn()
  $('.overlay').fadeIn()
})

// .img-modal-btn click시 .img-madal-box, overlay fadeOut()
$('.img-modal-btn').click(function(){
  $('.img-modal-box').fadeOut()
  $('.overlay').fadeOut()
})
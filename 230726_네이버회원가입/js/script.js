// label 클릭 했을 때 클릭된 labal의 자식인 checkbox-img에 Checked class toggle
$('label').on('click', function(e){
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked')
  if($(this).children('.checkbox-img').hasClass('checked')){
  $(this).children("input[type='checkbox']").attr('checked', true)
} else {
  $(this).children("input[type='checkbox']").removeAttr('checked', false)
}
})

// .total을 체크하면 .agree 올 체크
// .total을 언체크하면 .agree 전부 언체크

// .total .checkbox-img가 .checked 클래스를 가지고 있다면
// .agree안 .checkbox-img에 checked class add
// .agree안 input checkbox를 checked true

// .total .checkbox-img가 .checked 클래스를 가지고 있지 않다면
// .agree 안 .checkbox-img에 checked class remove
// .agree 안 input checkbox를 checked false
$('.total label').on('click', function(){
  if($(this).children('.checkbox-img').hasClass('checked')) {
    $('.agree').find('.checkbox-img').addClass('checked');
  } else {
    $('.agree').find('.checkbox-img').removeClass('checked')
    $('.agree').find('input[type="checkbox"]').removeAttr('checked')
  }
})

$('.agree label').on('click', function(){
  let len = $('.agre')
})


// 조건이 참이라면
//

if(unchk == 0){

}


//
// 하나라도 체크하지 않은 겡 있다면 submit() 을 막고

// .req-alert 텍스트를 보여준다.


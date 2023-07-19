
let modal = $('.modal');
console.log(modal)

$(".btn").click(function(){
  modal.fadeIn()
})
  
  $('.modal_content').click(function(){
    modal.fadeOut();
  })

let buttons = document.querySelectorAll('.btn-group button');


buttons.forEach(function(btn, index){
  btn.addEventListener('click', function(){
    let slideList = document.querySelector('.slide-list');
    let xValue = -index * 100 + 'vw';

    slideList.style.transform = `translateX(${xValue})`;
    slideList.style.backgroundColor = 'dodgerblue'
  })
})

buttons.addEventListener("mouseover", function(e){
  e.target.style.backgroundColor = 'dogerblue'
}, )

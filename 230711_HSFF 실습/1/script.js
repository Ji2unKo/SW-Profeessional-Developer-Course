let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let last = document.querySelector('.last')

let slideList = document.querySelector('.slide-list')
// console.log(slideList)

prev.addEventListener('click', function(){
  slideList.style.transform = 'translateX(0)'
})

next.addEventListener('click', function(){
  slideList.style.transform = 'translateX(-100vw)'
})

last.addEventListener('click', function(){
  slideList.style.transform = 'translateX(-200vw)'
})

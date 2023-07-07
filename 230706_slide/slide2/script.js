let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')

let slideList = document.querySelector('.slide-list')
console.log(slideList)

btn1.addEventListener('click', function(){
  slideList.style.transform = 'translateX(0)'
})

btn2.addEventListener('click', function(){
  slideList.style.transform = 'translateX(-100vw)'
})

btn3.addEventListener('click', function(){
  slideList.style.transform = 'translateX(-200vw)'
})

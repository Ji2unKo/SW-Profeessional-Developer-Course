const pointer = document.getElementById('pointer')
// console.log(pointer)

window.addEventListener('mousemove',(event) => {
  // console.log('마우스 좌표x값: '+ event.clientX + '마우스 좌표 Y값: ' + event.clientY)
  console.log(`마우스 X값 : ${event.clientX}, 마우스 Y값: ${event.clientY}`)
})
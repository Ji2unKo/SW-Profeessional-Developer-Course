// console.log(pointer)

window.addEventListener('mousemove',(event) => {
  const pointer = document.getElementById('pointer')
  // console.log('마우스 좌표x값: '+ event.clientX + '마우스 좌표 Y값: ' + event.clientY)
  // console.log(`마우스 X값 : ${event.clientX}, 마우스 Y값: ${event.clientY}`)

  // event객체에서 사용자의 x값을 가져와서,
  // pointer의 가로값(37px)을 반으로 나눈 18px을 뺀다.
  // 예) x값이 100일 경우, 100 - 18, 82px, 커서는 위치가 82px,
  pointer.style.top = `${event.clientY - (pointer.offsetHeight / 2)}px`
  pointer.style.left = `${event.clientX - (pointer.offsetWidth / 2)}px`

  // clientWidth,clienHeight의 경우에는 margin, border 사이즈를 무시한다.
  // clientWidth,clienHeight 는 boreder(1px solid white)포함 36px 사이즈를 인식하지 못하고,
  // 좌우상하 1px씩 제외한 34pxaks dlstlrdmf gksek.
  // console.log(pointer.clientWidth)
  console.log(pointer.offsetWidth)
})
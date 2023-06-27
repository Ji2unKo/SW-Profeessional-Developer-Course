const toggle =document.querySelector('.toggle-container')
// console.log('toggle')
let check = false;

toggle.addEventListener('click', (e) => {
  //  자체적으로 갖고 있는 이벤트를 취소
  e.preventDefault()
  // 2. toggle container를 클릭했을 때 active 클래스가 추가/샂ㄱ제
  toggle.classList.toggle('active')
  const input = e.currentTarget.querySelector('input')
  input.checked = check
  // teur, false 뒤집어 주는 역할
  check = !check
  console.log(check)
  // if(check){
  //   check = false
  //   console.log(check)
  // }else {
  //   check = true
  //   console.log(check)
  // }
})
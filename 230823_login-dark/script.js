// 화살표 함수 (arrow function) () => {}
// 함수 선언식 보다 간결하게 사용할 수 있다.
// function name(x, y){
//   return x + y;
// }
// (x, y) => x + y;
let btnLog = document.querySelector('.btn-login')

document.querySelectorAll('.animate-input').forEach((e) => {
  // e : .animate-input class가진 값을 하나씩 떼서 넘겨준 값
  let input = e.querySelector('input');
  let button = e.querySelector('button');
  // console.log(input, button)
  // console.log(btnLog)

  // onkeyup
  // 사용자가 키보드 키를 눌렀다가 떼었을 때 발생하는 이벤트
  // trim() : 공백을 제거하는 함수
  // 공백을 제거한 input.value.length가 0보다 클때 (= 입력된 값이 있을때)
  // .animate-input에 active라는 class를 추가해서 span이 위로 올라가게 한다.
  // . btn-login에 disabled라는 속성을 remove 시켜준다.

  // else
  // .animate-input 에 active class remove span 원래 자리로 돌아오게 만든다.
  // btnLog에 담겨 있는 disabled 속성에 add => setAttribute
  input.onkeyup = () => {
    if(input.value.trim().length > 0){
      e.classList.add('active');
      btnLog.removeAttribute('disabled')
    } else {
      e.classList.remove('active');
      btnLog.setAttribute('disabled', 'true')
    }
  }

  // 비밀번호 표시 / 숨기기
  // 비밀번호 표시 클릭 했을 때 => 숨기기 input type = "text"
  // 비밀번호 숨기기 클릭 했을 때 => 표시 input type = "password"
  // getAttribute input type 속성을 가져온다.
  if(button){
    button.onclick = () => {
      if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        button.innerHTML = '비밀번호 표시';
      } else {
        input.setAttribute('type', 'text');
        button.innerHTML = '비밀번호 숨기기';
      }
    }
  }
})


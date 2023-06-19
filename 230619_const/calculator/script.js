// const 변하지 않는것
// var text = "text content"
// const app = document.getElementById('app')

// app.textContent = text;

// for(let i = 0; i < 10; i++){
//  console.log(i)
//  const text = 'text';
//  console.log(text)
// }

// 버튼을 눌렀을때, 값이 증가한다.
// 버튼을 변수 저장
const btnInc = document.getElementById('increase')
const btnDec = document.getElementById('decrease')
// console.log(btnInc)
// number 라는 변수에 id-number 저장 id - element 변수 저장
const number = document.getElementById('content')
// console.log(number)
// 초기화된 숫자값
let originNumber = 0

// btnInc 눌렀을때 숫자 증가
btnInc.addEventListener('click', () => {
  claculate(originNumber,content, true)
})

// btnDec 눌렀을때 숫자가 감소
btnDec.addEventListener('click', () => {
  claculate(originNumber,content, false)
})

const money = 100
// 함수 정의
// function claculate(number, content, check) 
  const claculate = (number, content, check) => {
    // check 값을 판단 -> true false;
  if(check === true){
    number = number + money;
  } else {
    // number 0 보다 클때만 값을 감소시켜라
    if(number > 0){
      number = number - money;
    }
  }
  content.textContent = number
  return originNumber = number
}

// 실행 inc(incNum)

// const func = function(){
//   incNum = inc
// } //es5
// const func2 = () => {}
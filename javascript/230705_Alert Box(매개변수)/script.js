// document.write('12121')
// document.getElementById('open-btn').addEventListener('click', function(){
//   document.getElementById('alert').style.display = 'flex';
// })

// function closeAlert(){
//   document.getElementById('alert').style.display = 'none';
// }
// document.getElementById('close-btn').addEventListener('click', closeAlert);

// 두 개의 함수를 하나로 바뀌는  display 값을 매개변수로 받는다. (flex, none)
// 함수를 하나로 만들고 가변적인 값을 매개변수로 받을 수 있게 구멍을 만들어준다.
function opneNclose(매개변수){
  document.getElementById('alert').style.display=매개변수;}
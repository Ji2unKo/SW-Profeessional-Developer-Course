// 1초 마다 5라는 값을 1씩 감소시킨다. 5 4 3 2 1
// conut가 0이 됐을 때는 1초마다 감소하는 걸 멈춘다.

let count = 5;

 let timer = setInterval(function(){
  count =  count -1;
  console.log(count)
  let randoomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  document.querySelector('.count').style.backgroundColor = randoomColor;
  document.querySelector('.num').innerHTML = count
  if(count == 0){
    clearInterval(timer);
  }
}, 1000)
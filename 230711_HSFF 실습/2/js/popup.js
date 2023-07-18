let closeBtn = document.querySelector('.close-btn button');

// Javescirpt 기본 함수 
// n초 후에 코드 실행
// setTimeout
// setTimeout 함수는 파라미터를 두 개 받는데, 첫번째 콜백함수, 두번째는 ms 다누이
// setTimeout(function(){}, 5000)

// popupBtn click시 5초 후에 popup창 사라지게
closeBtn.addEventListener('click', function(){
  setTimeout(function(){
    document.querySelector('.popup').style.display = 'none';
  }, 5000)
})

// 쿠키를 이용한 시간 설정으로 팝업창 일정시간 동안 보이지 않게 하기
// 사용자가 팝업창을 그냥 닫았는지, 하루 열지 않기에 체크를 하고 닫았는지 확인
// setCookie00() : 함수를 호출할 경우 00시 기준으로 쿠기값 초기화
// setCookie24() : 함수를 호출할 경우 24시간 후에 쿠키값 초기화




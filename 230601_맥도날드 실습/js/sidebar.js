// 변수 선언 : var, let, const
// Javascipt는 변수명을 지울 때 카멜 표기법을 사용한다.
// getEIementsByClassName, getEIementsByClassID dkvdp . # 붙지 않는다.
// const gncIconBtn = document.getEIementsByClassName('클래스명');
// const gncIconBtn = document.getEIementsByClassID('아이디명');
const gncIconBtn = document.querySelector('.gnb-icon-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');
console.log(gncIconBtn,sidebar,sidebarOverlay);

// function 함수명() {
  // 실행 할 코드
// }

function openSidebar() {
  // 우리가 하고 싶은 내용
  //1.gncIconBtn 클릭 했을 때 sidebar, sidebarOverlay한테 is-active 클래스 추가
  // DOM 메소드를 이용행서 쉽게 클래스를 추가 및 제거 할 수 있다.
  // DOM이란 자바스크립트 같은 스크립팅 언어가 우리가 만들어 놓은 웹 페이지에 접근해서 그 요소를 쉽게 조작하는 역할을 한다.
  // 현재 웹 브라우저에서 DOM을 조작하는 언어는 Javasciprt가 유일하다.
  // DOM 데이터 타입 (메소드, 프로퍼티, 이벤트 리스너, 스타일 등)
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

// 내가 gndTconBtn한테 이벤트를 하나 추가할건데, => click 이벤트를 추가하고 걔를 클릭 했을 때 openSidebar이 함수를 실행 시켜라
gncIconBtn.addEventListener('click', openSidebar);

function closeSidebar() {
  // is-active 클래스 제거
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
}

sidebarOverlay.addEventListener('click', closeSidebar);



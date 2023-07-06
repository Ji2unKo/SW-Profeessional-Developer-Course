// dropdown-btn을 클릭 했을 때 dropdown-menu한테 active class 추가
// dropdown-menu가 active를 가지고 있을 때 클릭하면 active class removw
//toggle

let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownMenu = document.querySelector('.dropdown-menu');
console.log(dropdownBtn, dropdownMenu)

dropdownBtn.addEventListener('click', function(e){
  // a태그 전에 먼저 메뉴나오게 해주라고 하는 이벤트 (e)
  e.preventDefault();
  dropdownMenu.classList.toggle('active')
})


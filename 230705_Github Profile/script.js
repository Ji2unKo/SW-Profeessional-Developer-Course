const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
console.log(dropdownBtn, dropdownMenu)

function openSidebar() {
  dropdownBtn.classList.toggle('active')
  dropdownMenu.classList.add('active')
}

dropdownBtn.addEventListener('click', function)


function closeSidebar() {
  dropdownBtn.classList.add('active')
  dropdownMenu.classList.add('active')
}

dropdownBtn.addEventListener('click', closeSidebar)
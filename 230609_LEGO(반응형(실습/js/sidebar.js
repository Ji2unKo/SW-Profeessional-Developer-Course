const gncIconBtn = document.querySelector('.gnb-icon-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');
console.log(gncIconBtn,sidebar,sidebarOverlay);

gncIconBtn.addEventListener('click', function(){
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
})

sidebarOverlay.addEventListener('click', function(){
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
})
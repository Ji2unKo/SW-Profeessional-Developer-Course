
document.querySelector('.open-btn').addEventListener('click', function(){
  document.querySelector('.overlay').classList.add('is-open');
})


document.querySelector('.close-btn').addEventListener('click', function(){
  document.querySelector('.overlay').classList.remove('is-open');
})


document.querySelector('.overlay').addEventListener('click', function(e){
  if(e.target == document.querySelector('.overlay')) {
    document.querySelector('.overlay').classList.remove('is-open');
  }
})
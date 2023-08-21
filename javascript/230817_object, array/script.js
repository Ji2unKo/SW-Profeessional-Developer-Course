// Array 안에 object

let products = [
{
  img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d98a444e-d21c-415f-9136-938c9e0ee419/%ED%85%8C%ED%81%AC-%ED%97%A4%EB%9D%BC-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-5psTyMig.png',
  title : '나이키 테크 헤라',
  price : '103,200 원',
  size : ['220', '225', '230', '235']
},
{
  img :'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/e139f47a-fd3f-42fb-b2d6-ce708d7df6e0/%EC%9A%B0%EB%A8%BC%EC%8A%A4-%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-pearl-pink-dr9503-601-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg',
  title : '우먼스 에어 포스 1 Pearl Pink',
  price : '159,000 원',
  size : ['220', '225', '230', '235']
},
{
  img : 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/96089acc-96b4-4d22-8af9-d6bf36f9e8ae/%EC%9A%B0%EB%A8%BC%EC%8A%A4-%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%ED%95%98%EC%9D%B4-%E2%80%98coconut-milk-and-sail%E2%80%99-fd2596-600-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg',
  title : '우먼스 에어 조던 1 하이',
  price : '219,000 원',
  size : ['220', '225', '230', '235']
},
{
  img :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb279783-72ff-4d58-8159-61bf30e09493/%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EC%95%8C%ED%8A%B8-%EB%B2%A0%EC%9D%B4%EB%B9%84-%EC%8B%A0%EB%B0%9C-HfWYTtmi.png',
  title : '조던 1 로우 알트',
  price : '69,000 원',
  size : ['80', '90', '100', '110']
},
{
  img :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/821a8066-130f-46d8-8b8e-22147c1afc85/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%B2%A0%EC%9D%B4%EB%B9%84-%EC%8B%A0%EB%B0%9C-Y9tQEOaF.png',
  title : '나이키 덩크 로우',
  price : '52,000 원',
  size : ['80', '90', '100', '110']
},
{
  img :'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/f5de78fb-5616-434f-8ca6-e48b1d05cd07/%EC%A1%B0%EB%8D%98-1-%ED%95%98%EC%9D%B4-toddler-coconut-milk-and-sail-fd2598-600-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg',
  title : '조던 1 하이 (Toddler) Coconut Milk and Sail',
  price : '99,000 원',
  size : ['80', '90', '100', '110']
},
]

// document.querySelector('.box-item img').src = products[0].img;
// document.querySelector('.sho-info h2').innerHTML = products[0].title;
// document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price; 
// document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;

let boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(function(item, index){
  item.querySelector('img').src = products[index].img;
  item.querySelector('.sho-info h2').innerHTML = products[index].title;
  item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
  item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
})

// 프론트엔드 개발자가 하는 역할
// 서버가 보낸 데이터를 html에 꽃아준다
// 전문 용어로 '데이터 바인딩'이라고 한다.
// 데이터 바인딩을 쉽고 편하게 할 수 있도록 도와주는 도구 (React, Vue, angular)
// 시작 기호가 대괄호[]. 중괄호{}냐에 따라서 Array, object 구분
// Array, object 구분

// Javascript로 html 요소 생성
// creatElement('태그이름')
// let h1Tag = document.createElement('h1');
// h1Tag.innerHTML = '안녕하세요!';
// h1Tag.classList.add('hi');
// document.querySelector('.box-list').appendChild(h1Tag);

// box-list안에 p태그로 생성
// let pTag = document.createElement('p')
// pTag.innerHTML = '반갑습니다!';
// document.querySelector('.box-list').appendChild(pTag);

// products length만큼 createElement로 html 생성
// .box-list 안에 .box-item이라는 class를 가진 div 생성
// .box-item 안 
// 1. img tag 생성 src = products.img / alt = products.title
// 2. .box-list 안에 .sho-info라는 class를 가진 div 생성
// 3. .sho-info 안에 h2 tag 생성 => innerHTML = products.title
// 4. .sho-info 안에 p tag 생성 => innerHTML = products.price
// 5. .sho-info 안에 p tag 생성 => innerHTML = products.size

let boxList = document.querySelector('.box-list')

products.forEach(function(item){
  let boxItem = document.createElement('div')
  boxItem.classList.add('box-item')
  boxList.appendChild(boxItem);

  let boxImg = document.createElement('img');
  boxImg.src = item.img;
  boxImg.alt = item.title;
  boxItem.appendChild(boxImg);

  let shoInfo = document.createElement('div')
  shoInfo.classList.add('sho-info');
  boxItem.appendChild(shoInfo);

  let boxTitle = document.createElement('h2');
  boxTitle.innerHTML = item.title;
  shoInfo.appendChild(boxTitle);

  let boxPrice = document.createElement('p');
  boxPrice.innerHTML = item.price;
  shoInfo.appendChild(boxPrice)

  let boxSize = document.createElement('p')
  boxSize.innerHTML = item.size;
  shoInfo.appendChild(boxSize)

})


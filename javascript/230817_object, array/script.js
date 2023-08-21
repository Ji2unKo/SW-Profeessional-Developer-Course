// Array 안에 object

let products = [
{
  img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d98a444e-d21c-415f-9136-938c9e0ee419/%ED%85%8C%ED%81%AC-%ED%97%A4%EB%9D%BC-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-5psTyMig.png',
  title : '나이키 테크 헤라',
  price : '103,200 원',
  size : ['230', '235', '240', '245', '250']
},
{
  img :'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb279783-72ff-4d58-8159-61bf30e09493/%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EC%95%8C%ED%8A%B8-%EB%B2%A0%EC%9D%B4%EB%B9%84-%EC%8B%A0%EB%B0%9C-HfWYTtmi.png',
  title : '조던 1 로우 알트',
  price : '69,000 원',
  size : ['80', '90', '100', '110']
},
{
  img : 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/96089acc-96b4-4d22-8af9-d6bf36f9e8ae/%EC%9A%B0%EB%A8%BC%EC%8A%A4-%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%ED%95%98%EC%9D%B4-%E2%80%98coconut-milk-and-sail%E2%80%99-fd2596-600-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg',
  title : '우먼스 에어 조던 1 하이',
  price : '219,000 원',
  size : ['220', '225', '230', '235']
}
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
let h1Tag = document.createElement('h1');
h1Tag.innerHTML = '안녕하세요!';
h1Tag.classList.add('hi');
document.querySelector('.box-list').appendChild(h1Tag);

// box-list안에 p태그로 생성
let pTag = document.createElement('p')
pTag.innerHTML = '반갑습니다!';
document.querySelector('.box-list').appendChild(pTag);

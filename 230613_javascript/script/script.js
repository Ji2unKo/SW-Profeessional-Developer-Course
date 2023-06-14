// document.getElementById("apple").onclick = function(){
//   alert("누르지말랬잖아");
// }

// 윈도우 닫기 window.close();

// 1. 자바스크립트는 컴파일이 필요없는 인터프리터 언어이다.
// 2. 자바스크립트는 그 어떤 플랫폼이라도 브라우저만 있으면 정상 작동된다.

// alert("안녕하세요\n\'저\'는 \"고지은\" 입니다.");
// 이스케이프 문자열 \',"" \n 줄바꿈


// var(variables) 만들 변수의 이름;
// 문자열은 "" 꼭 쓰기
// var aaa; 변수를 만들고
// var aaa = "3"; // 변수에 값을 넣고
// alert(aaa);  // 그 내용을 확인했다.
// aaa; 불러올때 
// int(interer) aaa; 

// var a = 3;
// var b = 5;
// var c = a+b;
// alert(c);

// var a = "안녕하세요";
// var b = "hello";
// var c = a+b;

// alert(c);

// arr=array [ 0, 1, 2, 3] 괄호 안에 숫자들을 index number 라고 부른다
// var arr = [20, 35, 40, 50]; //배열(array)
// // 함수에서는 1번째 부터가 아니라 0번째 부턱 시작
// alert( arr[0] );
// // 4번째 사용하면 undefined 이 변수에 언젠가 객체를 할당하려고 하는데, 지금은 객체가 없습니다.
// // var arr =Array(4); //4칸짜리 배열
// var arr =[];
// arr[0] = 20;
// arr[1] = 35;
// arr = 40; 이렇게쓰면 에러남 [] index number 을 꼭 넣기!
          // :) arr 아파트를 만들수있음
// Nan = Not a Number 에러남
// 문자열 + 은 가능하지만 -,x는 Nan 나타남 (숫자만 가능)

//  배열공부
// var arr = [175, 78, "남자", false, null, ]; // arr안에는 문자,숫자 다 넣을수 있음

// // alert( "000 키는 arr[0] 입니다." ) 따옴표 안에 arr 들어가서 인식 불가능
// // alert ( "000의 키는" arr[0] "입니다." ); 에러 
// alert ( "000의 키는 "+175+" 입니다."); //+arr[0]+ 앞 뒤로 + + 를 넣기
// alert ( "000의 몸무게는 "+arr[1]+"입니다.");
// alert ( "000의 성별은 "+arr[2]+" 입니다.");


// if(arr[3]) {
//   alert("000는 기혼입니다.");
// }else{
//   alert("000는 미혼입니다.");
// } 파업은 이 글자로 나타남 (else)

// var lotto = [];

// for(i=0; i<6; i++){
//  var rand = Matf.floor(Math.random()*(45-1+1)+1);
//   lotto[i] = rand;
// }

// alert(lotto);

//이중 배열 공부
// 우리 건물은 총 5층짜리 건물인데 1층 부터 4층까지는 세개의 원룸이 있고 5층에는 주인세대 1세대만 있다.
// var lenthouse = [
//   ["전지현", "김태희", "정지훈"], 
//   ["송혜교", "RM", "슈가"], 
//   ["옥택연", "송강호", "태진아"], 
//   ["홍금보", "성룡", "신성록"],
//   ["고지은"] 
// ];

// var floor;
// var ho;

// // for 반복문
// for(i=0; i<5; i++){
//   for(j=0; j<lenthouse[i].length; j++){
//     if(lenthouse[i][j] == "송강호"){
//       floor = i+1;
//       ho = j+1;
//       break;
//     }
//   }
// }

// alert("송강호는 "+fllor+"0"+ho+" 호실에서 발견되었습니다.");

// 객체형변수 {속성명:속성값,속성명:속성값 ...}; 
// var jiho = {
//   height:175, 
//   weight:78, 
//   gender:"남자", 
//   mariage:false, 
//   house:null,
//   friends: ["김태훈", "염경선", "차영규", "황단비"]
// };

// alert( "지호의 친구1 : "+jiho.friends[1] );

// 지역변수
// var jiho = "한지호";

// // alert(jiho);
// function seoul(){
//   alert(jiho);
// }

// seoul();


// function seoul(){
//   var jiho = "한지호";
//   alert(jiho);
// }

// seoul();

// // alert(jiho);

// [prompt]공부
// var birth = prompt("생년을 입력하세요. 예) 1980");
// birth = parseInt(birth);
// var age = 2023 - birth;
// alert("당신의 나이는 "+age+"세 입니다.");
// // alert( birth );

// var lunch = confirm("당신은 점심을 드셨습니까?");
// if(lunch){
//   alert("오 배부르시겠네요.");
// }else{
//   alert("밥 먹을 시간도 없는 당신 화이팅.");
// }

// function rand(min,mix){
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// // alert( rand(0,255)) ;
// setInterval(function(){
//   var + r = (0,255)
//   var + g = (0,255)
//   var + b = (0,255)
//   document.getElementsByTagName("body")[0].style.backgroundColor
//   = "rgb("+r+","+g+","+b+")";
// },50);


// [나머지 연산자 공부]
// alert(7 / 2);
// alert(7 % 2);

// [증감 연산자 공부]
// var num = 3;
// num++; //후이 증감 연산자
// num++;
// //num--; 1씩 감소
// alert(num);
// 지금까지 버튼을 누른 횟수 = 
// #bth이 눌릴때 마다 이런일을 할 것이다.
// 지금까지 버튼을 누른 횟수를 1증가 시킴
//#num인 박스에 그 숫자를 입력

// var count = 0;
// document.getElementById("bth").onclick = function(){
//   count++;
//   document.getElementById("num").innerHTML = count;
// }

//[제이쿼리 문법]
// var count = 0;
// $("#bth").click(function(){
//   count++;
//   $("#num").text(count);
// });



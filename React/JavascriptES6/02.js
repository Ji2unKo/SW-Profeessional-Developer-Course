// Destructuring
// 구조 분해 할당
// 구조를 분해해서 값을 가져온다.
let person = {
  name : 'jieun',
  age : 33
}

// console.log(person.name)
// console.log(person.age)

// 단축 표기법
// 먼저 변수부터 선언하고 객체를 쓰고 그 안에 내가 가져오고 싶은 key값을 입력해주면 된다.
// person이라는 객체에서 name과 age라는 key값을 분해한 값을 let으로 선언한 변수에 할당해주는것(구조분해재할당)
let {name, age} = person;
console.log(name)

// 해당 문법을 Array에 적용
// num1, num2 라는 변수가 생성되고, 그 변수 안에는 배열의 순서대로 num1에는 arr배열의 0번째 값이 할당된다.
let arr = [1,2,3,4,5]
let [num1, num2] = arr;
console.log(num1, num2, num3)
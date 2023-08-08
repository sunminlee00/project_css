/*
 객체 생성
 1. Function 생성자 함수
 2. Object 생성자 함수
 3. 생성자 함수
 4. 객체리터럴
 5. 클래스

*/
"use strict"
/*
const op=new Function("a","b","return a+b");

let result=op(10,20);
console.log('result', result);
*/
/*
let person1=new Object();
person1.name="홍길동";
person1.age=20;
person1.addr="서울";

console.log(`name:${person1.name},
       age:${person1.age}, addr:${person1.addr}`);

person1.prt=function(){
     console.log('prt function!!!');
}
console.log(person1);


console.log(typeof person1);
console.log(Array.isArray(person1));

function Man(irum, age)
{
    this.irum=irum;
    this.age=age;
    this.prt=function() {
        console.log(`name :${this.irum}, age:${this.age}`);
    }
}
let p1=new Man("hong", 20);
let p2=new Man("park",10);

console.log(p1);
console.log(p2);

console.log(p1.irum, p1.age);
p1.prt();
console.log('==========');
console.log(p2['irum'], p2['age'] );
p2.prt();

*/
/*
const m1={irum:'hong', age:20, addr:'서울'};
const m2={irum:'park', age:10, addr:'경기'};

console.log(typeof m1, m1);
console.log(typeof m2, m2);
console.log(m1.irum, m1.age, m1.addr);
console.log(m2['irum'], m2['age'], m2['addr']);

*/
/*

class Student {
    constructor(studentId,irum, age)
    {
        this.studentId=studentId;
        this.irum=irum;
        this.age=age;
    }
}

let s1=new Student(1, 'hong',20);
let s2=new Student(2, 'park',10);

console.log(s1, typeof s1);
console.log(s2, typeof s2);
/*
   속성 추가
 */
/*
s1.addr='서울';
s1.sayHello=()=>{
      console.log('안녕하세요');
}

console.log(s1);

console.log("======속성 삭제 ======");

delete s1.age;
console.log(s1);

*/
//s1.nick1 nick2='eee';

/*
   대괄호만 사용하는 경우
     여러개의 속성으로 한 값을 정의
     런타임시 결정되는 속성
*/
/*
s1['nick1 nick2']='test!!!';

console.log(s1);

console.log(s1['nick1 nick2']);

*/
/*
let a='age';

 const user={
      name:'hong'
      ,[a]:20
 }

 console.log(user);

 */

// console.log('-------s1 객체 확인!!!--  ');
// console.log(s1);

// for(let item in s1)  //studentId, irum, age, addr
// {
//   console.log(item, s1[item]);
// }


class Student{
    constructor(irum, age)
    {
        this.irum=irum;
        this.age=age;
    }

}
Student.prototype.prt=function(){
    console.log('prt!!!');
}


let ins1=new Student("a1",20);
let ins2=new Student("a2",10);
console.dir(ins1);
console.dir(ins2);

ins1.prt();
ins2.prt();

// console.log(ins1);
// console.log('-----------');
// console.dir(ins1);
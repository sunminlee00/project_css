"use strict"
/*
   let  
   const
   var

*/

// var a=undefined;
/*
let a;
console.log('a', a);
*/
//let, const:  block scope 

// let a=30;
// {
//   let a=10;
//   console.log('block-a', a); //a:10
// }

// console.log('global-a', a); //a :30

// var su=100;
// {
//     var su=10;
//     console.log('blockd-su',su);
// }

// console.log('global-su', su);

// console.log('-------------');

// for(var i=1; i<3; i++){
//     console.log(i);
// }
// console.log('i...', i);

//  console.log('------------');

//  let tf='';

//  if(tf)
//    console.log('true');
//  else 
//    console.log('false');

// let arr=[10,20,30];

// let fn=function(){
//     console.log('function!!!');
// }
// fn();
// console.log('-----');
// console.log(arr.length);

// for(let i=-0; i<arr.length; i++)
//     console.log(arr[i]);

// console.log('-------');
// console.log(typeof arr);
// console.log(typeof(arr));
// console.log(typeof fn);
// console.log(typeof(fn));

// let person={};

// console.log(typeof person);
// console.log('----------');
// console.log(Array.isArray(arr));
// console.log(Array.isArray(person));

// let a='10';
// let b=20;
// let c=a+b;
// console.log(typeof c, c);
// console.log(typeof(10/2), 10/2);
// console.log(typeof('10'/2), '10'/2);
// console.log(typeof('a'/2), 'a'/2);

// console.log('-------');
// console.log(Boolean(''), Boolean(''))
// console.log(Boolean(0), Boolean('0'))
// console.log(Number('10'), Number('aa'), Number(null), Number(undefined))
// console.log(String(0))
/*
  숫자형 : parseInt  parseFloat  Number

*/
// let irum='hong gil dong';
// let jumsu=100;
// console.log('name : '+irum+", jumsu:"+jumsu);
// console.log('name : ',irum,", jumsu:", jumsu);
// console.log(`name :${irum}, jumsu:${jumsu}`);
/*
 단항연산자
   ++(증가연산), --(감소연산)

  let x=20;
  let y=++x;(전위연산)
 
  let z=x++; (후위연산)

 이항연산자 
     산술연산자 :  +, - , *, /, % , **

 삼항연산자 




*/
//  let a=10;
//  //let b=++a;
//  let b=a++;
//  console.log(`a:${a}, b:${b}`);

//  console.log('----------');
 
//  let t1=10;
//  let t2=3;

//  console.log(t1+t2);
//  console.log(t1*t2);
//  console.log(t1/t2);
//  console.log(t1%t2);
//  console.log(t1**t2);

//  console.log(10+20+'aaa');
//  console.log('aaa'+10+20);


/*
  비교연산
  */
/*
  console.log(10>=10);

  let a='10';
  let b=10;
  console.log(typeof a, typeof b);
  console.log(a==b);
  console.log(a===b);

*/
/* 
let m1={name:'hong', age:20};
let m2=m1;
let m3={name:'hong', age:20};

console.log(typeof m1, typeof m2, typeof m3);
console.log(m1==m2, m1===m2); //true
console.log(m1==m3, m1===m3); //flase

console.log('-------------');
console.log(null==undefined);
console.log(null===undefined);
console.log(false=='');
console.log(false==0);
console.log(false===0);

*/
/*
   복합대입 연산자

   a+=10;

   // a=a+10;
*/
/*
 let a=10;
 console.log(a); //10
 a+=30; // a=a+30;
 console.log(a); //40
 a/=4;
 console.log(a); // a=a/4; 10

 let t1=10;
 let t2=20;
 let t3=4;

 t3*=t1+t2;

console.log(t3);


*/
/*
let max;
let su1=10;
let su2=20;
max=(su1>su2)? su1:su2;
console.log(max);

*/
/*
let a=10;

console.log(a>>2);
console.log(a<<2);

*/
//조건문  - if

let kor=85;

/*
  합격 불합격
*/
/*

if(kor>=60)
    console.log('합격');
else
   console.log('불합격');
*/

/*
  논리연산
*/


/*
  빵하고 우유하고 샐러드   and (&&)
  빵이나 우유나 샐러드   or (||)
  */

  console.log(10>=10 && 10!==10);//true && false=> false
  console.log(10!==10 && 10>=10);//false
  
  console.log(10==10 && 20>=20);

  console.log(10>=10  || 10!==10);// true
  console.log(10!==10 || 10>=10); //trued
    




/*
if(kor>=90)
   console.log('수');
else if(kor>=80)
   console.log('우');
else if(kor>=70)
    console.log('미');
else if(kor>=60)
     console.log('양');
else 
     console.log('가');   
*/

document.getElementById('btn').onclick=function(){

     let elekor=document.getElementById('kor');
     let kor=Number(elekor.value);
     let eleeng=document.getElementById('eng');
     let eng=Number(eleeng.value);
     let elemath=document.getElementById('math');
     let math=Number(elemath.value);
    
     let avg=(kor+eng+math)/3;
     
     let result="<li> 평균점수 :"+avg;

     if(kor>=90 && eng>=90&& math>=90)
         result+="<li>very good</li>";
     else if(kor>=90 || eng>=90 || math>=90)
         result+="<li>good</li>";
     else
        result+="<li>bad</li>";

    document.getElementById('result')
      .innerHTML=result;


   //   if(kor>=90)
   //      result='수';
   //   else if(kor>=80)
   //      result='우';
   //    else if(kor>=70)
   //      result='미';
   //    else if(kor>=60)
   //      result='양';
   //    else
   //       result='가';
   //    document.getElementById('result')
   //     .innerHTML='국어 :'+kor+' , 결과 : '+result;
      
      //console.log(kor, typeof kor);
      elekor.value='';
      eleeng.value='';
      elemath.value='';
   }


































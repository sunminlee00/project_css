"use strict"
/*
let a1=[10,20,30];
let a2=a1;

console.log(a1===a2);

a1.forEach(item=> {
   console.log(item);
});
a2[1]=100;
console.log('==========');
a1.forEach(item=> {
    console.log(item);
 });
 */
/*
 let a=[10,20,30];

let newA=Object.assign([],a);
console.log(a===newA);

newA[1]=100;

a.forEach(item=>{
       console.log(item);
});
console.log('==========');
newA.forEach(item=>{
       console.log(item);
})
*/
/*
let p1={name:'hong'}
console.log(p1)

Object.assign(p1,{age:10})
console.log(p1)
 Object.assign(p1,{name:'park'})
console.log(p1)


*/

/*
let o=[10,20,30];
let o2=[10,20,30];

console.log(o===o2);

let tf= Object.is(o[0], o2[0]);
console.log(tf);


*/
let email="aaa123@aaa.com";
//출력결과

/*
  이메일 : aaa
  도메인: aaa.comㄴ
*/

/*
let data="hong,gil,dong";
let result=data.split(",");
result.forEach(item=>{
    console.log(item);
})
*/

// let result=email.split("@");
// console.log(`이메일:${result[0]}, 도메인:${result[1]}`);
/*
let loc=email.indexOf('@');
console.log(loc);

let e1=email.slice(0, loc);
let e2=email.slice(loc+1);
console.log(`이메일:${e1}, 도메인:${e2}`);

*/
/*
let arr=[10,20,30];
let arr2=new Array(100,200,300);

let newarr=arr.concat(arr2, ['t1','t2']);

console.log(arr);
console.log(newarr);

*/
/*
let data=[10,50,40,30,100,50];

let result=data.filter(function(element){
      //return element===50;

      return element>=40;
});

console.log(result);

*/
/*
let arrName=['hong','kim','lee'];

 let result= arrName.join('/');

 console.log(result);
*/
/*
let arr=[];
arr.push("aaa");
arr.push("bbb");
arr.push("ddd");

console.log(arr, arr.length);

console.log('========');

arr.forEach(item=>console.log(item));
console.log(arr.length);

let d1=arr.pop();
console.log(`삭제한 요소${d1}, 전체요소 :${arr}`);
*/

let irums=['홍','김','이','박','나'];
/*
  1. foreach

  map
  */
//   document.getElementById('view_btn')
//     .addEventListener('click', function(){
//         let elements='';
//         irums.forEach(element=>{

//             elements+=`<li>${element}</li>`;
//         });
//         document.getElementById('result').innerHTML=elements;
//     });
/*
  document.getElementById('view_btn')
    .addEventListener('click', function(){

     let result= irums.map(item=> `<li>${item}</li>`);
     document.getElementById('result').innerHTML= result.join('');

    });
*/

// try{
//   let arr=new Array(-1);

// } catch(e)
// {
//     console.log(e);
// }finally{
//      console.log('finally');
// }


//   try{
//               let arr=10;
//               let result=arr.toPrecision(200);
//               console.log(result);   } catch(e) {
//               console.log(e);
//           }finally{
//               console.log('finally');
//           }

// try{
//             a;
//           } catch(e)
//           {
//               console.log(e);
//           }finally{
//               console.log('finally');
//           }

// let a=10;
// try{
//     if(a>=20)
//        console.log('a가 20보다 큽니다.');
//     else if(a==20)
//        throw new Error("20와 동일");
//     else
//        throw new Error("20보다 작다");
// }catch(e)
// {
//   console.log(e);
// }finally{
//   console.log('end!!');

// }

document.getElementById('send')
 .addEventListener('click', function(){
   const irum=document.getElementById('irum');
   const txtage=document.getElementById('age');


   /*
     숫자 :  숫자형 숫자  10 20 ... 
             문자형 숫자  "10"
    */
  try{
      let age=Number(txtage.value);
      if(Number.isNaN(age)) {
         throw new Error('숫자형 자료가 아님');
      } else
      {
         if(age < 0) {
          throw new Error('0보다 작습니다.'); 
        } else{
           console.log(`이름 :${irum.value}, age:${age}`);
         }
     }
  }catch(e){
    console.log(e);
  }finally{
    console.log('done');
  }



   irum.value="";
   txtage.value="";

});

/*
   async:브라우저가 페이지를 파싱하는 동안에도 스크립트가 실행 
   defer: 브라우저가 페이지의 파싱을 모두 끝내면 스크립트가 실행 
   async, defer모두 선언하지 않을 경우 
     브라우저가 페이지를 파싱하기 전에 스크립트를 가져와서 
     바로 실행 

*/






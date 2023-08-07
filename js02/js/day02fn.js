function fn_move1(){
   console.log('fn_move1-1');
   console.log('fn_move1-2');
}

fn_move1(); //함수호출
console.log('======');
fn_move1();

function fn_move2(irum, age)
{
   console.log(`name :${irum} , age:${age}`);
   console.log('움직입니다.!!!');
}

fn_move2('hong', 20);

console.log('----------------');

function getSu()
{
    let su=100;
    return su;
}

  let su= getSu();
  console.log('값은 : '+su);


/*
  두개의 숫자를 입력받아서  더하는 기능을 구현하시오. 
 
*/
/*
let su1=10;
let su2=20;


function add(a, b)
{
   //console.log(a+b);
   return a+b;
}

let result=add(su1, su2); // su(10,20);
console.log('처리결과는:'+result);

*/

/*
function prt(arg){
   console.log(arg, typeof arg);
}

prt(10);
*/

/*
function prt2(arg){
   console.log(arg, typeof arg);
}

let arr=[10,20,30];
prt2(arr);

*/
/*
let irum='kim'; //전역변수 
function prt()
{
    var test='hong';
    console.log(irum, test);

   for(var i=1; i<10; i++)
   {
      console.log(i);
   }
    console.log('test.,..', i);

}

prt();
console.log('=========');
*/
//console.log(irum, test);


/*
prt();

function prt()
{
    console.log('test');
}

*/


/*
const prt=function(){
    console.log('prt');
}
prt();


const prt2=function(irum='hong', age=0)
{
    console.log('irum :', irum);
    console.log('age', age);
}

prt2('test', 20);
console.log('-----------');
prt2();


console.log('------------');

const show=function(...irum){
  
    for(let i=0; i< irum.length; i++)
    {
        console.log(irum[i]);
    }
     console.log('============');

     for(let a of irum)
     {
        console.log(a);
     }
}

show();
console.log('=======parameter1 =========');
show('a1');
console.log("=========parameter 2 =====");
show('a1','a2');

*/
/*
let arr1=[10,20,30];
let arr2=[100,200,300];
// let arr3=[10,20,30,100,200,300];
let arr3=[...arr1, ...arr2];
let prt=function(t)
{
   console.log(t[1]);
}

prt(arr3);

*/
/*
let add=function(a, b){
     return a+b;
}

let tot=add(10,20);
console.log(tot);
*/

/*
let prt=()=>"hong";

let result=prt();
console.log(result);

let prt2=()=>{
     console.log('test1');
     console.log('test2');
}
prt2();

let prt3=(a, b)=>{
    console.log('a : ', a,'b:',b);
}

prt3('test','test2');
*/


let fn=function(a, b, t1)
{
    console.log(a, b);
   // console.log(t1);
   t1(a,b);
}

let add=function(su1, su2)
{
   console.log('add function',(su1+su2));
}

fn(10,20,add);


[10,20,30].forEach(function(item){
   
     console.log(item);

});

console.log('==============');
[10,20,30].forEach((item)=>{
    console.log(item);
});


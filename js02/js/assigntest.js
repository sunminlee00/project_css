/*
  구조분해 할당:
  배열이나 객체 속성을 해체해서 개별 변수에 담는것 

*/

// let [a,b] =[10,20];
// console.log('a :',a);
// console.log('b', b);
// console.log('----------');
// let [t1,t2,...t3]=[100,200,300,400];
// console.log(t1);
// console.log(t2);
// console.log(t3);

// console.log('-------------');

// let [su1, su2]=[100,200];
// console.log(`su1:${su1}, su2:${su2}`);
// [su2, su1]=[su1, su2];
// console.log(`su1:${su1}, su2:${su2}`);

// let man={
//    irum:'hong'
//    ,age:20
//    ,addr:'seoul'
// }

// let {irum, age, addr}=man;
// console.log(`irum:${irum}, age:${age}, addr:${addr}`);

// console.log('-------- ppt -----');
// let [t1, t2, t3] =[10,20];
// console.log(t1);
// console.log(t2);
// console.log(t3);


// let [p1=10, p2=10, p3=10]=[1,2];
// console.log(p1, p2, p3);

// console.log('---------------');
// let [a,,b]=['test1','test2','test3','test4']
// console.log(a,b);

// console.log('----------');

// let [k1, ...k2]=['test1','test2','test3','test4']
// console.log(k1);
// console.log(k2);



// let arr=[];
// let arr2=new Array(3);

// console.log(typeof arr);
// console.log(typeof arr2);
// console.log(Array.isArray(arr));
// console.log(Array.isArray(arr2));
let len;
let arr=[];
len=arr.push("a1");

console.log(`len:${len}, arr:${arr}`);
console.log('------------');

len=arr.push("a2");
console.log(`len:${len}, arr:${arr}`);





let arrinfo=[];

document.getElementById('append')
.addEventListener('click', function(){

  let txtname=document.getElementById('irum');
  let txtage=document.getElementById('age');
  let irum=txtname.value;
  let age=Number(txtage.value);

  let info={irum:irum, age:age};
  arrinfo.push(info);

  console.log(arrinfo);

  txtname='';
  txtage='';
});

document.getElementById('view').onclick=function()
{
let liList=
arrinfo
  .map((item)=>`<li>irum :${item.irum}, age:${item.age}</li>`);

  console.log(liList);
   document.getElementById('result').innerHTML=liList;
}
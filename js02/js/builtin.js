document.getElementById('sum')
.addEventListener('click', function(){

  let su1=document.getElementById('su1');
  let su2=document.getElementById('su2');

   let result=Number(su1.value)+ Number(su2.value);
   console.log(result);

   su1.value="";
   su2.value="";
} );


// let su1=Number('10');
// let data=su1.toString();

// console.log(typeof su1, su1);
// console.log(typeof data, data);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


let now=new Date();
let y=now.getFullYear();
let m=now.getMonth()+1;
let d=now.getDate();

let h=now.getHours();
let mi=now.getMinutes();
let s=now.getSeconds();


let result=`${y}.${m}.${d}. ${h}:${mi}:${s}`;
console.log(result);



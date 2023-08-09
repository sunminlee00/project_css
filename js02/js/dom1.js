// document.getElementById('win_open')
//   .onclick=function()
//   {
//       //location.href="http://www.naver.com";
//      //  document.write('hello');

// }


// let d=document.body;
// console.log(d);

// let list_id=document.getElementById('listId');
// console.log(list_id);

// let li_class=document.getElementsByClassName('listClass');
// console.log(li_class);

// let tagname=document.getElementsByTagName('li');
// console.log(tagname);

// let names=document.getElementsByName('listName');
// console.log(names);

// let child1=document.body.children;
// console.log(child1);

// //let lis=document.getElementsByTagName('li')[2].textContent;
// //let lis=document.getElementsByTagName('li')[2].className;
// let lis=document.getElementsByTagName('li')[2].tagName; 

// console.log(lis);

// let ele_red=document.getElementsByClassName('red');
//let ele_red1=document.querySelectorAll('.red');

// for(let i=0; i < ele_red.length ; i++)
// {
//     ele_red[i].className='green';
//     i--;
// }

// for(let i = ele_red.length-1; i>=0 ; i--){
//      ele_red[i].className='green';
// }


// [...ele_red].forEach(item=> item.className='green');


// document.querySelectorAll('.red')
// .forEach(item=> item.className='green');


/*
  children :  자식중 element type 요소만 반환
  firstChild
  lastChild
  nextSibling
  previousSibling

  hasChildNodes
*/
// const ul_ele= document.getElementsByTagName('ul')[0];
// console.log(ul_ele.children);
// console.log(ul_ele.hasChildNodes());
// console.log(ul_ele.firstElementChild);
// console.log(ul_ele.lastElementChild);

// let ele_m3=document.getElementById('m3');
// let next_ele_m3=ele_m3.nextElementSibling;
// console.log(next_ele_m3);
// next_ele_m3.style.backgroundColor='yellow';

// ele_m3.previousElementSibling.style.color='red';

/*
   className : class attribute값을 변경하거나 얻어올때 
   classList: add remove toggle replace 메서드 사용

*/

// let cName=
// document.getElementById('m2')

// console.log(cName.className);
// cName.className='red';


let ele_li=document.querySelectorAll('li');


// ele_li.forEach(item=> {
//    if(item.classList.contains("red"))
//         item.classList.replace('red', 'green');
// })

ele_li.forEach(item=>{
  if(item.className==='red')
     item.className='green';

})
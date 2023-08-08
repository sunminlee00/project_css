// const addcount=function()
// {
//     let count=0;
//     count++;
//     return count;
// }

// document.getElementById('btn')
//  .onclick=function(){
//     document.getElementById('result')
//      .innerHTML=addcount();
//  }


// const addcount=(function(){
//     let count=0;

//     let fn=function(){
//          count++;
//        return count;
//     }
//    return fn;
// })();

// document.getElementById('btn').onclick=function(){
//     document.getElementById('result').innerHTML=addcount();

// }

document.getElementById('btn')
  .onclick=function(){
      let txtirum=document.getElementById('irum');
      let irumvalue=txtirum.value;  //get
      document.getElementById('result').innerHTML+=`<li>${irumvalue}</li>`;


      txtirum.value=""; //set
  }




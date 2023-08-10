"use strict"
let acc=document.getElementsByClassName('accodian');

for(let i=0; i < acc.length; i++){
  acc[i].addEventListener('click', function(){
      this.classList.toggle('active');
      const panel= this.nextElementSibling;
      //console.log(panel.style.maxHeight);
        if(panel.style.maxHeight)
         {
           panel.style.maxHeight='';
         }else{
           panel.style.maxHeight="10vh";
         }

  });

}
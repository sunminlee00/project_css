const mytabs=document.querySelectorAll('.tabItem');
const tabpanels=document.querySelectorAll('.tabpanel');

const init=function(){
   let initli=mytabs[0].firstElementChild;
   let initA=initli.parentElement.getAttribute('aria-controls');
    initli.classList.add('bgpanel');
    initli.focus();
    let initId=document.getElementById(initA);
    initId.classList.add('visit');
}

init();

mytabs.forEach(item=>{
    item.firstChild.addEventListener('focus', function(e){
       e.preventDefault();
       for(let i=0; i <  mytabl)     
   

    });


})
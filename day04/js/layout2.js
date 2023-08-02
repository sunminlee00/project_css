window.onload=function(){
  let ele1= document.getElementsByClassName("main_menu")[0];

  ele1.addEventListener('click', function(){
    document.getElementsByTagName('nav')[0].classList.toggle('visible');
});
}
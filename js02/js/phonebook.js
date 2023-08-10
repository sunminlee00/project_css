"use strict"

const searchfn=(e)=>{
    e.preventDefault();
  //console.log(e.target.value);
  let inputvalue=e.target.value;
  let element_li= document.getElementsByTagName('li');
  [... element_li].forEach(item=>{
     let ele_a=  item.getElementsByTagName('a')[0];
     let a_content=ele_a.textContent;
     if(a_content.indexOf(inputvalue)>-1)
     {
        item.style.display="block";
     }else{
         item.style.display="none";
     }

    });
}

document.getElementById("myInput")
.addEventListener("input", searchfn);
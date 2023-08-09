let layoutImgs=document.getElementsByClassName('layout');

for(let layoutImg of layoutImgs)
{
     layoutImg.addEventListener('mouseover', function(){

       for(let i=0; i < layoutImgs.length;  i++)
       {
           layoutImgs[i].style.border='';
       }

        this.style.border='3px solid red';
        let v= document.getElementById('view');
        // console.log(this.getAttribute('src'));
        // console.log(this.getAttribute('alt'));

        v.setAttribute('src', this.src);
        v.setAttribute('alt', this.alt);

     });

}
let a;
document.getElementById('timer')
  .onclick=function()
  {
     a=setInterval(() => {
        let now=new Date();
        let y=now.getFullYear();
        let m=now.getMonth()+1;
        let d=now.getDate();
        let h=now.getHours();
        let mi=now.getMinutes();
        let s=now.getSeconds();
        let result=`${y}.${m}.${d}. ${h}:${mi}:${s}`;

       document.getElementById('result').innerHTML=result;

      }, 1000);

  }

  document.getElementById('stop')
    .onclick=function()
    {
        clearInterval(a);

    }
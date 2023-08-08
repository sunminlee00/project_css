/*
   IIFE :  
   정의하자마자 즉시 실행되는 함수

*/
(function prt() {
    console.log('prt!!!!');
})();

let fnprt=function(a,b){
       console.log(`test fnprt ${a}, ${b}`);
}
fnprt(10,20);

((a, b)=>{
     console.log(`test prt ${a}, ${b}`);
})(10,20);


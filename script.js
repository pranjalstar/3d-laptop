

let laptop = document.querySelector('.laptop');
let range = document.querySelector('.range');
let screen = document.querySelector('.screen');


range.addEventListener("change",()=>{
  
  var rangeValue = range.value;
  
  screen.style.transform = `rotateX(${rangeValue}deg)`;
  
})



let body = document.querySelector('body');


body.addEventListener("mousemove",(e)=>{
  
      var x = e.pageX;
      var y = e.pageY;
  
  laptop.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  
})


var a = 1;

body.addEventListener("mousedown",(e)=>{
  
   if(a == 1){
          screen.classList.add('screenLaptop');
     a = 0;
   }else{
     screen.classList.remove('screenLaptop');
     a = 1;
   }
 
  
})




body.addEventListener("touchmove",(e)=>{
  
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
  
  laptop.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  
})


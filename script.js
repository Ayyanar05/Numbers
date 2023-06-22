


const counter = document.querySelector('.counter');
       const one = document.querySelector('.one');
       const two = document.querySelector('.two');
       let count=0;
       one.addEventListener("click",()=>{
        count++;
        counter.innerHTML = count;
       });
       two.addEventListener("click",()=>{
        count--;
        counter.innerHTML = count;
       });
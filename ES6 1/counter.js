let inpIncrement = document.getElementById("start");
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")
let timer = document.querySelector("#timer");
let inc = document.querySelector("#increment")
let decrement = document.querySelector("#decrement")

let flag 
let i = 0
class Counter{
    
    start() {
        inpIncrement.addEventListener('click', () => {
             flag = setInterval(() => {
                  i++;
                  timer.innerText = i;
                  console.log(i)
             }, 1000);
        });
   }
   stop(){
    stop.addEventListener('click',()=>{
        clearInterval(flag);
    })
   }

   reset(){
    reset.addEventListener('click',()=>{
        i=0
        timer.innerText = i;
    })
   }
   Increment(){
    inc.addEventListener('click',()=>{
        clearInterval(flag)
        i+=1;
        timer.innerText = i
    })
   }
   decrement(){
    decrement.addEventListener('click',()=>{
        clearInterval(flag)
        i-=1;
        timer.innerText = i
    })
   }
}


let result = new Counter()
result.start()
result.stop()
result.reset()
result.Increment()
result.decrement()

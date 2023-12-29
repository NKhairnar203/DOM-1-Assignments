let input1 = document.querySelector("#inp1")
let input2 = document.querySelector("#inp2")
let form = document.querySelector("form")
let body = document.querySelector("body");
let btn = document.getElementById("btn")
let display = document.querySelector(".display")

form.addEventListener('submit', function () {
    event.preventDefault()
    localStorage.setItem('key', 'value');
    let data=[];
    let UserInfo = `UserName:-[ ${input1.value} ] And UserAge:- [ ${input2.value} ]`
    data.push(UserInfo);
    localStorage.setItem('userData', JSON.stringify(data));
    console.log(data)
})

btn.addEventListener("click",()=>{
    let storedData = JSON.parse(localStorage.getItem('userData'));
    console.log(storedData); 
    let h1 = document.createElement("h1");
    h1.innerText = storedData;
    display.append(h1)
    body.append(display)
    
})

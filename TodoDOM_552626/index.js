let form = document.querySelector("form")
let inp1 = document.querySelector("#task")
let inp2 = document.querySelector("#priority")
let tbody = document.querySelector("tbody")
let arr = []

form.addEventListener('submit',function(e){
    e.preventDefault();
    obj = {}
    obj.task = inp1.value
    obj.priority = inp2.value
    
    arr.push(obj)
    // console.log(priority./)
    console.log(arr)
    tbody.innerHTML = null
    arr.map((ele)=>{
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        var td2 = document.createElement('td');
        let td3 = document.createElement('td');

        // td3.innerText = 'Delete'
        td1.innerText = ele.task;
        td2.innerText = ele.priority;
        if(td2.innerText === 'High'){
            td2.style.backgroundColor= 'red';
        }
        else{
            td2.style.backgroundColor= 'green';
        }

        row.append(td1,td2,td3)

        tbody.append(row)
    })
})

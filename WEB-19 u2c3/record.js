// fill in javascript code here

// All Variables Declare-
let form = document.querySelector("form");
let name =document.querySelector('#name');
let employeeID = document.querySelector("#employeeID");
let department =document.querySelector('#department');
let exp = document.querySelector("#exp");
let email =document.querySelector('#email');
let mbl = document.querySelector("#mbl");
let arr=[]

form.addEventListener('submit',function(){
    event.preventDefault()

    let obj ={}
    let tbody = document.querySelector('tbody')
    // import in object-
    obj.name = name.value;
    obj.employeeID = employeeID.value;
    obj.department = department.value;
    obj.exp = exp.value;
    obj.email = email.value;
    obj.mobile = mbl.value;
    arr.push(obj)
    
    tbody.innerHTML = null;
    
    // create display table row and table data-

    arr.map((ele)=>{
        let row = document.createElement('tr');
       
        let td1 =document.createElement('td');
        td1.innerText = ele.name;
        
        let td2 =document.createElement('td');
        td2.innerText = ele.employeeID;

        let td3 =document.createElement('td');
        td3.innerText = ele.department;

        let td4 =document.createElement('td');
        td4.innerText = ele.exp;

        let td5 =document.createElement('td');
        td5.innerText = ele.email;

        let td6 =document.createElement('td');
        td6.innerText = ele.mobile;

        // check Role 
        let td7 =document.createElement('td');
            if(ele.exp <= 1){
                td7.textContent = "Fresher"
            }
            else if( 2 > ele.exp || 5 > ele.exp){
                td7.textContent = "Junior"
            }
            else if(ele.exp >= 5){
                td7.textContent = "Senior"
            }

        // delete data
        let td8 =document.createElement('td');
        td8.innerText = 'Delete'
        td8.addEventListener('click',remove)

        // data append in row variable
        row.append(td1,td2,td3,td4,td5,td6,td7,td8);

        // row data append in tbody
        tbody.append(row)
       
    })
})

function remove(){
    event.target.parentNode.remove()
}
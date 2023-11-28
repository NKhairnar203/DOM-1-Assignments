// fill in javascript code here

let form = document.querySelector('form');
let name = document.querySelector('#name')
let docID = document.querySelector('#docID');
let dept = document.querySelector('#dept')
let exp = document.querySelector('#exp');
let email = document.querySelector('#email')
let mbl = document.querySelector('#mbl');
let tbody = document.querySelector('tbody')
let arr=[]

form.addEventListener('submit',function(){
    let obj={}
    event.preventDefault()
    obj.name = name.value;
    obj.docID = docID.value;
    obj.dept = dept.value;
    obj.exp = exp.value;
    obj.email = email.value;
    obj.mobile = mbl.value;
    arr.push(obj);

    tbody.innerText = null
    arr.map((ele)=>{
        
        let row = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerText = ele.name;

        let td2 = document.createElement('td');
        td2.innerText = ele.docID;

        let td3 = document.createElement('td');
        td3.innerText = ele.dept;

        let td4 = document.createElement('td');
        td4.innerText = ele.exp;

        let td5 = document.createElement('td');
        td5.innerText = ele.email;

        let td6 = document.createElement('td');
        td6.innerText = ele.mobile

        let td7 = document.createElement('td');
        if(ele.exp <= 1){
            td7.textContent = "Trainee"
        }
        else if( 2 > ele.exp || 5 > ele.exp){
            td7.textContent = "Junior"
        }
        else if(ele.exp >= 5){
            td7.textContent = "Senior"
        }

        let td8 = document.createElement('td');
        td8.innerText = 'Delete'
        td8.style.backgroundColor = 'red'
        td8.addEventListener('click',function(){
            event.target.parentNode.remove()
        })

        row.append(td1,td2,td3,td4,td5,td6,td7,td8)

        tbody.append(row)

    })
})
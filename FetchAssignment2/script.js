
let box = document.querySelector("#box")
let Click = document.querySelector("#click")


let flag = false
Click.addEventListener("click",()=>{
    
    if(flag==false){
        fetch("https://reqres.in/api/users").then((res)=>{

            res.json().then((final)=>{

                final.data.forEach(element => {
                    let userDiv = document.createElement("div")
                    userDiv.id = "userDiv"

                    let userID = document.createElement("h2") 
                    userID.innerText = element.id

                    let userImage = document.createElement("img")
                    userImage.src = element.avatar

                    let userFisrt_lastName = document.createElement("h3")
                    userFisrt_lastName.innerText = element.first_name +" "+ element.last_name;


                    let userEmail = document.createElement("p")
                    userEmail.innerText = element.email

                    userDiv.append(userID,userImage,userFisrt_lastName,userEmail)
                    box.append(userDiv)
                });

            })

        })
        flag = true;
    }
    
})

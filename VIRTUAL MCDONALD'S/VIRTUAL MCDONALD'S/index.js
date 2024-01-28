let form = document.querySelector('form')
let foodImg = document.querySelector('.foodImg')

// let showImg=document.querySelector('.showImg')

let burger = document.getElementById('burger')
let coffee = document.getElementById('coffee')
let fries = document.getElementById('fries')


let imgArr = ["https://img.freepik.com/free-photo/grilled-cheeseburger-sesame-bun-with-fresh-toppings-generative-ai_188544-12325.jpg", "https://t4.ftcdn.net/jpg/04/78/34/91/360_F_478349185_YZpMo2H1r9SbwLwFj9DOF3vLooCBFouK.jpg", "https://media.istockphoto.com/id/1402860995/photo/pile-of-delicious-fried-potatoes-with-salt-against-black-background.webp?b=1&s=170667a&w=0&k=20&c=gvezfdqAZo_sju2y1Q3YZmyMlUlfGHFjeNDgqLVc-PI=", "https://cdn.foodbeast.com/wp-content/uploads/2020/09/McD-Pho-Burger-002.jpg", "https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/mcdonalds-1.jpg?quality=82&strip=1", "https://img.freepik.com/premium-photo/pommes-frites-hd-8k-wallpaper-stock-photographic-image_853645-34142.jpg", "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.cleveland.com/home/cleve-media/width2048/img/ent_impact_home/photo/mcdonalds-77f48977b3dba7c0.jpg"]


form.addEventListener('submit', (elm) => {
     foodImg.innerText = null
     elm.preventDefault()



     let imgCreate = document.createElement('img')
     let imgText = document.createElement('p')
     let h1 = document.createElement('h1')

     let x = Math.random() * 10;
     let timer = Math.trunc(x) * 1000

     let id = Math.random() * 1000000000;
     let idNum = Math.trunc(id)

     let promisFirst = new Promise((resolve, reject) => {

          imgCreate.src = "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
          foodImg.append(imgCreate)
          // imgCreate.style.border="none";
          setTimeout(() => {

               if (burger.checked == true) {
                    resolve("Its Resolved")
                    h1.innerText = ""
                    h1.innerText = `order id #${idNum}`
                    imgCreate.src = imgArr[0]
                    imgText.innerText = "Cheesy Italian Veg Burge"
                    foodImg.append(h1, imgCreate, imgText)

               }

               else if (coffee.checked == true) {
                    foodImg.innerHTML = " "
                    h1.innerText = ""
                    h1.innerText = `order id #${idNum}`
                    imgCreate.src = imgArr[1]
                    imgText.innerText = "Hazelnut Cold Coffee"
                    foodImg.append(h1, imgCreate, imgText)

               }

               else if (fries.checked == true) {
                    foodImg.innerHTML = " "
                    h1.innerText = ""
                    h1.innerText = `order id #${idNum}`
                    imgCreate.src = imgArr[2]
                    imgText.innerText = "Fries (L)"
                    foodImg.append(h1, imgCreate, imgText)
               }

               if (burger.checked == true && coffee.checked == true) {

                    foodImg.innerHTML = " "
                    h1.innerText = ""
                    h1.innerText = `order id #${idNum}`

                    imgCreate.src = imgArr[3]
                    imgText.innerText = "Cheesy Italian Veg Burger And Cold Coffee"
                    foodImg.append(h1, imgCreate, imgText)
               }
               if (burger.checked == true && fries.checked == true) {

                    foodImg.innerHTML = " "
                    h1.innerText = ""
                    h1.innerText = `order id #${idNum}`

                    imgCreate.src = imgArr[4]
                    imgText.innerText = "Veg Burger And Fries"
                    foodImg.append(h1, imgCreate, imgText)
               }

               if (coffee.checked == true && fries.checked == true) {
                    foodImg.innerHTML = " "
                    h1.innerText = ""
                    h1.innerText = `order id #${idNum}`

                    imgCreate.src = imgArr[6]
                    imgText.innerText = "Cold Coffee & Fries"
                    foodImg.append(h1, imgCreate, imgText)
               }

               if (burger.checked == true && coffee.checked == true && fries.checked == true) {

                    foodImg.innerHTML = " "
                    h1.innerText = ""
                    h1.innerText = `order id #${idNum}`

                    imgCreate.src = imgArr[5]
                    imgText.innerText = "Veg Burger, Cold Coffee & Fries"
                    foodImg.append(h1, imgCreate, imgText)
               }
               else {

                    if (burger.checked == false && coffee.checked == false && fries.checked == false) {
                         reject("Oredr Is Rejected")
                         alert("Please Order Atlist One ")
                         foodImg.innerHTML = ""
                    }
               }
          }, timer)
     })

     promisFirst.then((result) => {
          console.log(result);
     }).catch((result) => {
          console.log(result);
     })

})
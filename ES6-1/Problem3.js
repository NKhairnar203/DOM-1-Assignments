let store = []
let data = ["MA", "SA", "I", "SCH", "OOL"]

data.map((elm) => {
     let ans = elm.toLocaleLowerCase()
     store.push(ans)
})
console.log(store);
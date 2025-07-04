
let id=prompt("Enter the Id")/

fetch(`https://fakestoreapi.com/products/${1}`).then(data=>data.json()).then(d=>console.log(d)).catch((err)=>console.log(err))



()





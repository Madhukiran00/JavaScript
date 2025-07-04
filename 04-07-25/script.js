// a=[1,2,3]
// u=JSON.stringify(a)
// a.pop()
// b=JSON.parse(u)
// console.log(a,b)


// function add(...a){
//     let sum=0
//     if (a.length>0){
//         for (let i=0;i<a.length;i++){
//             sum=sum+a[i]
//         }
    
//     }
//     return sum
    
// }
// console.log(add(1,2,3,4,5))







// function add(...a){
//     let sum=0
//     if (a.length>0){
//         for (let i=0;i<a.length;i++){
//             sum=sum+a[i]
//         }
    
//     }
//     return sum
    
// }
// console.log(add(1,2,3,4,5))


// #Destructuring 
// l=[1,2,3]
// const [a,b,c]=l
// console.log(a,b,c)
// const [a,b,c] = [10, 20, 30];
// console.log(a,b,c);  // 10 30

// const l = [1, 2];
// const [a, , c=6] = l;
// console.log(a,c);

// a={name:"madhu",age:"21"}

// console.warn("sdjkdf")
// window.alert("sdfd")

// window.confirm()
// window.prompt()
// window.open()
// navigator.geolocation()


// Bom(Browser object model)
// window.()=> prompt  alert open close confirm moveTo resizeTo
// navigator =>userAgent(ch) platform(os) language online geolocation
// screen => height,width,availheight,avalwidth,pixelDepth,colorDepth
// location => href hostname reload,replace,pathname,assign
// history =>go(-,+) back forward





// fetch("http://localhost:3000/users",{
//     method:"POST",
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify({name:"madhu",age:21})
// }).then(d=>d.json).then(d=>console.log(d)).catch(err=>console.log(err))

// fetch("https://fakestoreapi.com/products").then(data=>data.json).then(data=>console.info(data))


// fetch("https://fakestoreapi.com/products").then(data=>data.json().then(data=>console.log(data).catch(error=>console.log(error))))

// 


// fetch("http://localhost:3000/users",{
//     method:"POST",
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify({use_name:"madhu",age:21})
// })
// .then(response=>response.json())
// .then(data=>console.log(data))



// fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({user_name: "kiran",age: 22})
// })
// .then(response => response.json())
// .then(data => console.log(data)) 








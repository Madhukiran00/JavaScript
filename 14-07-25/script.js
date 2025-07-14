


// let data=fetch("https://dummyjson.com/users")
// .then((da)=>(da.json()))
// .then((da)=>console.log(da)).catch((err)=>{
//     console.log("Error:", err)
// })




let mypromise= new Promise((resolve, reject) =>{
    let is_delivered=false;
    if(is_delivered){
        resolve("Order is delivered");
    }else{
        reject("Order is not delivered");
    }
})
mypromise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})




myPromise= new Promise((resolved, reject) =>{
    let num=4;
    if(num%2==0){
        resolved("Even");
    }else{
        reject("Odd");
    }
})
myPromise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})




let companyDetails = [
    { companycode: "TCS", employid: [101, 102, 103, 104] },
    { companycode: "INF", employid: [201, 202, 203, 204] },
    { companycode: "WIP", employid: [301, 302, 303, 304] },
    { companycode: "HCL", employid: [401, 402, 403, 404] }]

let code = "HCL";
let id = 601;
let details


let promise=new Promise((resolve,reject)=>{

for(let i=0; i<companyDetails.length;i++){
    if (companyDetails[i].companycode==code){
        details=companyDetails[i]
    }
}
if (details!==undefined){
    if (details.employid.includes(id)){
        resolve("Employee exists")

    }else{
        reject("Employee does not exist")
    }
}else{
    reject("Company does not exist")
}

}).then((msg)=>{console.log(msg)})
.catch((err)=>{console.log(err)})




userDetails=[
    {"username":"madhu",
    "email":"madhu@gmail.com",
    "password":"123456789"},

    {"username":"Madhukiran",
    "email":"madhukiran@gmail.com",
    "password":"987654321"}]

let myPromise=new Promise((resolve,reject)=>{
    nam="madhu"
    mail="madhu@gmail.com"
    pass="123456"
let data;
for(let i=0;i<userDetails.length;i++){
    if (userDetails[i].username == nam){
        data=userDetails[i]
    }
}
if (data!==undefined){
    if(data.email==mail){
        if(data.password==pass){
            resolve("Login successsful");
        }else{
            reject("Incorrect password");
        }
    }else{
        reject("Email not found");
    }
}else{
    reject("User not found");
}

})
myPromise.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})
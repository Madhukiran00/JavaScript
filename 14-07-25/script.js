
// let url="https://dummyjson.com/users"

// let data=fetch(url)
// .then((da)=>{
//     console.log(da)
// }).catch((err)=>{
//     console.log("Error:", err)
// })




// myPromise= new Promise((resolve, reject) =>{
//     let is_delivered=true;
//     if(is_delivered){
//         resolved("Order is delivered");
//     }else{
//         reject("Order is not delivered");
//     }
// })
// mypromise.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })









// myPromise= new Promise((resolved, reject) =>{
//     let num=4;
//     if(num%2==0){
//         resolved("Even");
//     }else{
//         reject("Odd");
//     }
// })
// myPromise.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })




// myPromise= new Promise((resolved, reject) =>{
// let companyDetails=[{companycode:"ABC123",employId:[101,102,103,104]},
// {companycode:"EFG123",employId:[201,202,203,204]},
// {companycode:"HIJ123",employId:[301,302,303,304]},
// {companycode:"KLM123",employId:[401,402,403,404]},
// {companycode:"NOP123",employId:[501,502,503,504]}]
// let code="ABC123";
// let id=103;
//     for(let i=0; i<companyDetails.length; i++){
//         if(companyDetails[i].companycode===code){
//             code=companyDetails[i].companycode;
//             break;
//         }
//     }
   
//     if(companyDetails.includes(code) && companyDetails[0].employId.includes(id)){
//         resolved("Employee Found");
//     }else{
//         reject("Employee Not Found");
//     }
// })
// myPromise.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })




let companyDetails=[{companycode:"ABC123",employId:[101,102,103,104]},
{companycode:"EFG123",employId:[201,202,203,204]},
{companycode:"HIJ123",employId:[301,302,303,304]},
{companycode:"KLM123",employId:[401,402,403,404]},
{companycode:"NOP123",employId:[501,502,503,504]}]

code="ABC123"

for(let i=0; i<companyDetails.length; i++){
    if(code=companyDetails[i].comapycode==code){
        console.log("comapy code found")
    }

}

// name
// email
// password
// is_reistered=TRUE

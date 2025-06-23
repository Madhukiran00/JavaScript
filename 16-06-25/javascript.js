let inp1=document.getElementById("input1")

let inp2=document.getElementById("input2")

let btn=document.getElementById("button1")

btn.addEventListener("click",function(){
    let input1=+(inp1.value)
    let input2=+(inp2.value)
    console.log(input1+input2)
})
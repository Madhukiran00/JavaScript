

let remind=setInterval(function(){
    let out=document.createElement("div")
    out.style.textAlign = "center"; 
    out.textContent="Take 50-ml of water "
    out.style.fontSize="50px"

    document.body.append(out)
},3000)

setTimeout(()=>{
    
    clearInterval(remind)

},16*3000)

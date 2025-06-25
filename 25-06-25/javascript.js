

let grandparent=document.getElementById("grandparent")
 grandparent.style.height="400px"
 grandparent.style.width="400px"
 grandparent.style.border="2px solid red"
 

grandparent.addEventListener("click",(e)=>{
    console.log("This Is Grand Parent")
    // e.stopPropagation(); 

 })


 


 let parent=document.getElementById("parent")

 parent.style.height="300px"
 parent.style.width="300px"
 parent.style.border="2px solid blue"

 parent.addEventListener("click",(e)=>{
    console.log("This Is Parent")
    // e.stopPropagation(); 
 },true)




let child=document.getElementById("child")
child.style.height="200px"
child.style.width="200px"
child.style.border="2px solid green"

child.addEventListener("click",(e)=>{
    console.log("This Is Child")
    // e.stopPropagation(); 

},true)






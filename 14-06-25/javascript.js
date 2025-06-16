
let heading=document.createElement("h1")

heading.innerText="products"
document.body.append(heading)
heading.style.textDecoration="underline"
heading.style.textTransform="Capitalize"
heading.style.textAlign="center"

let seperator=document.createElement("hr")
document.body.append(seperator)

let main_container=document.createElement("div")
main_container.style.display="flex"
main_container.style.border="1px solid black"
document.body.append(main_container)
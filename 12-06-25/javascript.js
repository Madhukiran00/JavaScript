let heros = ["prabhas", "ranveer", "salman", "sharukh", "akshay"]
let heroines = ["deepika", "katrina", "kareena", "shraddha", "anushka"]

let lis = document.createElement('ul')
for (let i = 0; i < heros.length; i++) {
    let li = document.createElement("li")
    li.innerText = `${heros[i]} - ${heroines[i]}`
    lis.append(li)
    li.style.listStyle = "none"

}
document.body.append(lis)
let user_name = getElementById("name").value
let mobile = getElementById("mobile").value
let pass = getElementById("pass").value
let email = getElementById("email").value



button("click", () => {


    details = {
    user_name: use_name,
    mobile: mobile,
    pass: pass,
    email: email
}


    fetch("https://localhost/users", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(details)
    })

})






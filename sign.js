let name=document.getElementById("username")
let pswd=document.getElementById("password")
let email=document.getElementById("email")
let submitbutton=document.getElementById("button")

submitbutton.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!name.value==""&&!pswd.value==""&&!email.value==""){
        const namevalue=name.value
    const emailvalue=email.value
    const pswdvalue=pswd.value
    console.log(namevalue)
    localStorage.setItem("name",namevalue)
    localStorage.setItem("email",emailvalue)
    localStorage.setItem("pswd",pswdvalue)
    alert("signup done successfully!!!")
    window.location.href="login.html"}
    else{
        alert("fill the fields")
    }
})
    

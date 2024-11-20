const loginbtn=document.getElementById("button")
loginbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let namestorage=localStorage.getItem("name")
    let pswdstorage=localStorage.getItem("pswd")
    let inputusername =document.getElementById("username").value
    let inputuserpswd=document.getElementById("password").value
    if(namestorage==inputusername&&pswdstorage==inputuserpswd){
        alert("login done succesfully!!!")
         window.location.href="home.html"}
         else{
            alert("invlaid credentials")
         }
       
    
})
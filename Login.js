



// document.querySelector("#form").addEventListener("submit", loginfunction);
// var regdUsers = JSON.parse(localStorage.getItem("userdatabase"))
// //  we peekup the dta from localStorage

// //  console.log(regdUsers);
// function loginfunction(event){
//    event.preventDefault();
//    var pass = document.querySelector("#password").value;
//    var user = document.querySelector("#username").value;

//    for(var i = 0; i < regdUsers.length ;i++) {
//    // console.log(regdUsers[i].username,regdUsers[i].password);
//    if(regdUsers[i].username == user && regdUsers[i].password == pass){
//        window.location.href = "./index.html";
//    } 
// }
// }

// document.getElementById("image").addEventListener("click",function(){
//     window.location.href="./landing page/landing.html"
// })


let Login = async() => {
  
    try{
        var login_data = {
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
    };
    
    login_data =JSON.stringify(login_data);         
    
    let res = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: login_data,
    
        headers :{
           "Content-Type": "application/json", 
        },
    });                                                                 
    
    let data = await res.json();
    console.log("data :", data);
    } catch(error){
            console.log("error", error);
    }
    window.location.href="./index.html";
    };

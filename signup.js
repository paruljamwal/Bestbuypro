



// document.querySelector("#form").addEventListener("submit",formsubmit);
// // var userstack = JSON.parse(localStorage.getItem("userdatabase"));
// // var userstack = [];
//  var userStack = JSON.parse(localStorage.getItem("userdatabase")) || [];
// function formsubmit(event){
//     event.preventDefault();
//     var email = document.querySelector("#email").value;
//     var pass = document.querySelector("#password").value;
//     var confirmpass = document.querySelector("#confirmpassword").value;
//     var user = document.querySelector("#username").value;
//     var mob = document.querySelector("#mob").value;
//     // console.log(email,pass,user,mob)


//     if(pass != confirmpass) {
//         document.getElementById("messages").innerHTML="**Password are not same";
//         return false;
//     }

//     if(pass.length < 5) {
//         document.getElementById("messages").innerHTML="**Password length must be greater then five";
//         return false;
//     }

//     if(pass === "" || email === "" || user === ""  || mob === "") {
//         document.getElementById("messages").innerHTML="**please fill the above details";
//         return false;
//     }
   
    
//     var userdata = {
//         emailadd:email,
//         password:pass,
//         confirmpassword:confirmpass,
//         username:user,
//         mobilenumber:mob,
//     };

//    axios.post("http://localhost:2222/register",userdata);
    // // userStack.push(userdata);
    // // console.log(userstack)
    // localStorage.setItem("userdatabase", JSON.stringify(userStack));
    // alert("Sign Up Successful")
    // window.location.href="login.html"
// }

//document.getElementById("image").addEventListener("click",function(){
  //  window.location.href="home.html"
//});

let Register = async() => {
  
    try{
        var register_data = {
        userName : document.querySelector("#username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        cpassword :document.querySelector("#confirmpassword").value,
        mobilephone : document.querySelector("#mob").value,
    };
    
    register_data =JSON.stringify(register_data);         
    
    let res = await fetch("http://localhost:8080/register", {
        method: "POST",
        body: register_data,
    
        headers :{
           "Content-Type": "application/json", 
        },
    });                                                                 
    
    let data = await res.json();
    console.log("data :", data);
    } catch(error){
            console.log("error", error);
    }
    window.location.href="./login.html"
    };
       




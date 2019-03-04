function validation(){

    cleanErrors();
    
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var validator = true;

    if(name.trim().length <3){
        document.querySelectorAll("[data-error]")[0].innerHTML = "Name is required";
        validator = false;
    }
    
    
    if(username.trim() == ''){
        document.querySelectorAll("[data-error]")[1].innerHTML = "Username is required";
        validator = false;
    }
    
    
    if(email.trim() == ''){
        document.querySelectorAll("[data-error]")[2].innerHTML = "Email is required";
        validator = false;
    }

   
    if(password.trim() == ''){
        document.querySelectorAll("[data-error]")[3].innerHTML = "Password is required";
        validator = false;        
    }


    return validator;
}

function cleanErrors(){
    document.querySelectorAll("[data-error]").forEach( error => error.innerHTML = "")
}

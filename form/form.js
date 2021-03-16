var form = document.getElementById("form");
form.onsubmit = function validateForm(e) {
    e.preventDefault();
    var name=document.forms["myform"][name].value; 
    var password=document.forms["myform"]["password"].value; 
    var confirmedpass = document.forms["myform"]["confirmedpassword"].value 
    if (name == "" || name == null) {
      alert("Name must be filled in");
      name.focus();
      return false;
    }else if(password.length < 6){  
        alert("Password must be at least 6 characters long.");  
        password.focus();
        return false; 
    }else if(password != confirmedpass){
        alert("passowrd doesn't match");
        return false;
    }
  }
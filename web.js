var nameError=document.getElementById("name-error")
var phoneError=document.getElementById("phone-error")
var EmailError=document.getElementById("Email-error")
var messageError=document.getElementById("message-error")
var submitError=document.getElementById("submit-error")

function validateName(){
    var name=document.getElementById("contact-name").value;
    if(name.length==0){
        nameError.innerHTML="Name is required."
        return false;
    }
    nameError.innerHTML="valid";
    return true;
    
}

function validatePhone(){
    var phone=document.getElementById("contact-number").value;
    if(phone.length==0){
        phoneError.innerHTML="Phone number is required."
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML="Phone number should be 10 digits."
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Phone number is incorrect"
        return false;
    }
    phoneError.innerHTML="valid";
    return true;
}

function validateEmail(){
    var Email=document.getElementById("contact-Email").value;
    if(Email.length==0){
        EmailError.innerHTML="Email is required."
        return false;
    }
    if(!Email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
        EmailError.innerHTML="Email Invalid."
        return false;
    }
    EmailError.innerHTML="valid";
    return true;
}

function validateMessage(){
    var message=document.getElementById("contact-message").value; 
    var required=30;
    var left=required-message.length;
    if(left>0){
        messageError.innerHTML=left +"more character required";
        return false;
    }
    messageError.innerHTML="valid";
    return true;

}
function validateForm(){
    if(!validateName()||!validatePhone()||!validateEmail()||!validateMessage()){
        submitError.innerHTML="Please fix error to submit";
        return false;
    }


}




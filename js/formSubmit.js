function onSubmit() {
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var msg=document.getElementById("message");
    const namePattern=/^[A-Za-z]+(?: [A-Za-z]+)*$/;
    const mailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!namePattern.test(name.value))
    {
        window.alert("Please enter a valid name");
        name.value="";
        return false;
    }
    else if(!mailPattern.test(email.value))
    {
        window.alert("Please enter a valid email");
        email.value="";
        return false;
    }
    else if(msg.value.length<30)
    {
        window.alert("Please enter a message consisting of atleast 30 characters");
        return false;
    }
    else
    {
        window.alert("Details Submitted. We will contact you shortly");
        name.value="";
        email.value="";
        msg.value="";
        return true;
    }
}
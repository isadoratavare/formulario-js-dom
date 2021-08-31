function emptyInput(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let messages = document.getElementsByClassName("msg")
    console.log(messages.length)

    if(email == ''){
        document.getElementById("email").className="empty"
        messages[0].className = "msg2"
    }if (senha == ''){
        document.getElementById("senha").className="empty"
        messages[0].className = "msg2"
    }
    else{
        document.getElementById("email").className="email"
        document.getElementById("senha").className="email"
        messages = document.getElementsByClassName('msg2')
        messages[0].className = "msg"
        messages[0].className = "msg"
    }
}
function emptyInput(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    if(email == ''){
        document.getElementById("email").className="empty"
        document.getElementById("text-email").className = "msg2"
    }else{
        document.getElementById("email").className="email"
        document.getElementById("text-email").className = "msg"
    }
    if (senha == ''){
        document.getElementById("senha").className="empty"
        document.getElementById("text-password").className = "msg2"
    }
    else{
        document.getElementById("senha").className="email"
        document.getElementById("text-password").className = "msg"

        
    }
}
function emailCorrect(){

}
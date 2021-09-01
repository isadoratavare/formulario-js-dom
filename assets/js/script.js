function emptyInput(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    if(email == ''){
        console.log("email vazio")
        document.getElementById("email").className="empty"
        document.getElementById("text-email").innerHTML = "* O campo email é obrigatório"
    }else{
        document.getElementById("email").className="email"
        document.getElementById("text-email").innerHTML = ""
    }
    if (senha == ''){
        console.log("senha vazio")
        document.getElementById("senha").className="empty"
        document.getElementById("text-password").innerHTML = "* O campo senha é obrigatório"
    }
    else{
        document.getElementById("senha").className="email"
        document.getElementById("text-password").innerHTML = ""   
    }
}
function emailCorrect(){
    let email = document.getElementById("email").value
    console.log(email)
    if (email != ""){
        for (i of email){
            if (i == "@"){
                document.getElementById("email").className="email"
                document.getElementById("text-email").innerHTML = ""
            } 
        }
    }
}
function passwordCorrect(){
    let senha = document.getElementById("senha").value
    if(senha != ""){
        if(senha.length < 8){
        document.getElementById("senha").className="empty"
        document.getElementById("text-password").innerHTML = "* A senha deve possuir mais de 8 caracteres"}
        else{
            document.getElementById("senha").className="email"
            document.getElementById("text-password").innerHTML = ""
        }
    } 
}
const form = document.querySelector("#form")
const inputEmail = document.querySelector("#inputEmail")
const  inputPassword = document.querySelector("#inputPassword")

form.addEventListener("submit", (event)=>{
    event.preventDefault(); //Altera o modo de envio padrão do form.

    //Valida o campo e o email de acordo com a RegExp.
    if(inputEmail.value === "" || !emailValid(inputEmail.value)){
        alert("Por favor, preencha os campos.") 
        return;
    }     
    //true = envio do form.
    form.submit();
});

//Criação da RegExp para validar melhor o campo de email.

function emailValid(email){
    
    const regexEmail = new RegExp(
        /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-z]{2,}$/
    );

    //Verifica o email.
    if(regexEmail.test(email)){
        return true;
    }
    return false;
}
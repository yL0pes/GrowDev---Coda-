//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("create-email-input").value;
    const senha = document.getElementById("password-input").value;

    if(email.length < 5){
        alert("Insira um email válido!");
    }

    
    if(senha.length < 5){
        alert("Mínimo de 8 digitos de senha!");
    }
});
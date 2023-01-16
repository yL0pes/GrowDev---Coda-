const myModal = new bootstrap.Modal("#registroModal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input-login").value;
    const senha = document.getElementById("senha-login-input").value;
    const session = document.getElementById("session-check").checked;

    const account = getAccount(email)

    if(!account){
        alert("Verifique o usuário ou a senha");
        return;
    }

    if(account) {
        if(account.senha !== senha){
            alert("Verifique o usuário ou a senha");
            return;
       
            
        }

        saveSession(email, session);

        window.location.href = "home.html";
    } 

});


//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("create-email-input").value;
    const senha = document.getElementById("password-input").value;

    if(email.length < 5){
        alert("Insira um email válido!");
        return;
    }

    
    if(senha.length < 4){
        alert("Mínimo de 4 digitos de senha!");
        return;
    }

    saveAccount({
        email: email,
        senha: senha,
        transactions: [],
    });

    myModal.hide();
    alert("Conta criada com sucesso!");

});

function checkLogged() {
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged){
        saveSession(logged, session);
    
        window.location.href = "home.html"

    }

}

function saveAccount(data){
    localStorage.setItem(data.email, JSON.stringify(data));
};

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
};

function getAccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return "";

};
const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);

//ADD LANCAMENTO
document.getElementById("transaction-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        Valor: value, Tipo: type, Descrição: description, Data: date
    });

    saveData(data);
    e.target.reset();
    myModal.hide();

    alert("Lançado com Sucesso!");

});

checkLogged();

function checkLogged() {
    if(session){
        sessionStorage.setItem('logged', session);
        logged = session;
    }
    
    if(!logged){
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if (dataUser) {
        data = JSON.parse(dataUser);
    }

    console.log(data);

};

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}
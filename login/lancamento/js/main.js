var logado = false;

if(localStorage.getItem("acesso") == "true") {
    logado = true;
}

if(logado != true) {
    alert("Você não está autenticado!");
    window.location.href = "index.html";
}

function sair() {
    localStorage.clear();
    window.location.href = "index.html";
}



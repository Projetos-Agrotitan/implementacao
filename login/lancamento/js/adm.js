var autorizado = false;

if(localStorage.getItem("adm") == "true") {
    autorizado = true;
}

if(autorizado != true) {
    alert("Você não está autenticado!");
    window.location.href = "index.html";
}


function logar() {
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    var valida = 0;
    var user;

        if (valida == 0) {

            // Exemplo de Usuário Desativado
            if (usuario.value == "desativado" && senha.value == "desativado"){
                localStorage.setItem("acesso", false);
                localStorage.setItem("adm", false);
                alert("O usuário " + usuario.value + " foi desativado! Contate o Suporte para maiores informações.");
                window.location.href = "login.html";
            } 
            // Fim do Exemplo

            if (usuario.value == "Admin" && senha.value == "123"){
                localStorage.setItem("acesso", true);
                localStorage.setItem("adm", true);
                localStorage.setItem("supervisor", true);
                user = usuario.value;
                alert("Usuário autenticado!")
                window.location.href = "selecionar_modulo.html";
                valida++;
            } 
            
            if (usuario.value == "Bruno" && senha.value == "teste") {
                localStorage.setItem("acesso", true);
                localStorage.setItem("adm", false);
                localStorage.setItem("supervisor", false);
                alert("Usuário autenticado!")
                window.location.href = "selecionar_modulo.html";
                valida++;
            }
            
            if (usuario.value == "Douglas" && senha.value == "douglas123") {
                localStorage.setItem("acesso", true);
                localStorage.setItem("adm", false);
                localStorage.setItem("supervisor", false);
                alert("Usuário autenticado!")
                window.location.href = "selecionar_modulo.html";
                valida++;
            }

            if (usuario.value == "Gustavo" && senha.value == "adgb2019") {
                localStorage.setItem("acesso", true);
                localStorage.setItem("adm", true);
                localStorage.setItem("supervisor", true);
                alert("Usuário autenticado!")
                window.location.href = "selecionar_modulo.html";
                valida++;
            }
        }

        if (valida == 0) {
            alert("Usuário ou senha invalido!");
            localStorage.setItem("acesso", false);
            localStorage.setItem("adm", false);
        }

}


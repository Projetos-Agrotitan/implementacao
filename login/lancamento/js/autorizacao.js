function inserir() {

    var autorizadoPublicar = false;

    if(localStorage.getItem("supervisor") == "true") {
        autorizadoPublicar = true;
        window.location.href = "index_edicao.html";
    } 
    else {
        erroLogin();
    }
}

function atualizar() {
    var autorizadoAtualizar = false;

    if(localStorage.getItem("supervisor") == "true") {
        autorizadoAtualizar = true;
        window.location.href = "https://www.blogger.com/blog/themes/edit/7661023053024716234";
    }
    else {
        erroLogin();
    }

}
var starred = $("#botao_starred").click(buscaStarred);

function buscaStarred() {
    limpaDocumento();                           
    var campoNome = $("#input_nome").val();
    $.get("https://api.github.com/users/" + campoNome + "/starred", pegaInfo);  
}


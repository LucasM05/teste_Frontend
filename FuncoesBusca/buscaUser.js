$("#botao_busca").click(buscaUsuario);
var limparNome = $("#input_nome").click(limpaBusca);

function buscaUsuario() {
    limpaDocumento();
    var campoNome = $("#input_nome").val();
    $.get("https://api.github.com/users/" + campoNome, pegaInfoUser);

}

function pegaInfoUser(data) {
    var infoUsuario = data;
    adicionaImg(infoUsuario);
    console.log(infoUsuario);
    
    $.each(infoUsuario, function (index, value) {
        var user = index + " : " + value;
        console.log(user);
        insereDados(user);
    });
}

function insereDados(user) {

    var linhaDados = $("<div></div>").addClass("row");
    $(".div_info").append(linhaDados);
    
    var colunaDados = $("<div></div>").addClass("col-6");
    $(".div_info").append(colunaDados);

    colunaDados.text(user);
    linhaDados.append(colunaDados);
}

function limpaBusca() {
    limparNome.focus(function () {
        limparNome.val("");
    });
}

function limpaDocumento() {
    $(".div_info").text("");
}

function adicionaImg(infoUsuario) {
    let img = $('<img></img>').attr({ src: infoUsuario.avatar_url }).addClass('circle responsive-img col s2 left');
    $(".div_info").append(img).addClass("aaa");

    let quebraLinha = $("<di><br></div").addClass("row");
    $(".div_info").append(quebraLinha);
}
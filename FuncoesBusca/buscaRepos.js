$("#botao_repos").click(buscaRepos);

function buscaRepos() {
    limpaDocumento();
    var campoNome = $("#input_nome").val();
    $.get("https://api.github.com/users/" + campoNome + "/repos", pegaInfo);
}

function pegaInfo(data) {
    var infoInfo = data;

    infoInfo.map(function (infoInfo) {
        $.each(infoInfo, function (index, value) {
            if (index == "owner") {
                value = value.login;
            }
            if(index == 'license'){
                value = value.name;
            }
            var info = index + " : " + value;
            console.log(info);
            insereDados(info);
        });
        
        let quebraLinha = $("<p></p>").css("border-bottom", "dotted");
        $(".div_info").append(quebraLinha);
    });

    

}


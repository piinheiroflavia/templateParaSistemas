console.log("conf ")
$(document).ready(function () {

    $("#btnBuscar").on("click", function () {
        console.log("foi 1 ")
        // Obter os valores das datas
        var periodo1 = $("#startDateRS").val();
        var periodo2 = $("#endDateRS").val();

        // Validar se as datas foram preenchidas
        if (periodo1 && periodo2) {
            // Enviar dados para o controlador via AJAX
            console.log("foi 2 ")
            // Exemplo de como usar os valores
            console.log('Período 1:', periodo1);
            console.log('Período 2:', periodo2);
            $.ajax({
                url: '/confbilling/buscaconf',
                type: 'POST',
                data: {
                    periodo1: periodo1,
                    periodo2: periodo2
                },
                success: function (response) {
                    console.log(response);

                    // Verifique se a consulta foi bem-sucedida
                    if (response.success) {
                        // Manipule os dados e exiba-os no local desejado
                        exibirDados(response.dadosConferencia);
                    } else {
                        // Se houver algum erro, exiba uma mensagem de erro
                        alert(response.message);
                    }
                },
                error: function (error) {
                    console.log(error);
                }
            });
        } else {
            alert("Por favor, preencha ambas as datas.");
        }
    });
});

function exibirDados(dadosConferencia) {
    
    var tabelaHtml = '<table>';
    tabelaHtml += '<thead><tr><th>Data</th><th>Semana</th><th>QtdLinhas</th><th>Minutos</th><th>Sistemas</th></tr></thead>';
    tabelaHtml += '<tbody>';

    dadosConferencia.forEach(function (item) {
        tabelaHtml += '<tr>';
        tabelaHtml += '<td>' + item.Data + '</td>';
        tabelaHtml += '<td>' + item.semana + '</td>';
        tabelaHtml += '<td>' + item.QtdLinhas + '</td>';
        tabelaHtml += '<td>' + item.Minutos + '</td>';
        tabelaHtml += '<td>' + item.Sistemas + '</td>';
        tabelaHtml += '</tr>';
    });

    tabelaHtml += '</tbody></table>';

    // Insira a tabela no local designado
    $('#resultadoConsulta').html(tabelaHtml);
}

console.log($('#tabelaParametros'));
$(document).ready(function () {
    $.ajax({
        url: '/parametros/getparametro/PROX CDR MERA', // Substitua 'PROX CDR MERA' pelo ID desejado
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response)
            if (response.data) {
                console.log("1");
                // Filtrar apenas a linha com id igual a "PROX CDR MERA"
                tabela = $('#tabelaParametros').DataTable({
                    searching: false,
                    lengthChange: false,
                    paging: false,
                    info: false,
                    "columnDefs": [
                        {
                            "width": "50%", // Define a largura da primeira coluna
                            "targets": 0 // Índice da primeira coluna (considerando 0 como a primeira)
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 1 // Índice da segunda coluna
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 2 // Índice da segunda coluna
                        }
                    ],
                    renderer: "bootstrap",
                    language: {
                        url: "//cdn.datatables.net/plug-ins/1.11.4/i18n/pt_br.json"
                    },

                    data: response.data,
                    columns: [
                        { "data": "id", "title": "ID" },
                        { "data": "contents", "title": "CONTENTS" },
                        {
                            data: null,
                            defaultContent: '<button type="button" class="btn btn-primary btn-detalhes btn-editar">Editar</button>'
                        }
                    ]
                   
                });
            } else {
                console.log('A resposta do servidor não contém dados.');
            }
            console.log("3");
        },

        error: function (error) {
            console.log(error);
        }
    });
});
$('#tabelaParametros').on('click', '.btn-editar', function () {
    var data = tabela.row($(this).parents('tr')).data();

    // Verifica se 'data' é definido e se possui a propriedade 'id'
    if (data && data.hasOwnProperty('id')) {
        abrirModalEdicao(data);
    } else {
        console.error('O objeto de dados não possui a propriedade "id".', data);
    }
});

// Função para abrir o modal de edição
function abrirModalEdicao(id, contents) {
    // Preencher os campos do formulário com os valores existentes
    $('#editId').val(id);
    $('#editContents').val(contents);

    // Abrir o modal
    $('#editModal').modal('show');
}

// Exemplo de chamada da função ao clicar em um botão de edição na tabela
$(document).on('click', '.btn-detalhes', function () {
    // Obter os dados da linha selecionada
    var rowData = tabela.row($(this).parents('tr')).data();

    // Chamar a função para abrir o modal de edição
    abrirModalEdicao(rowData.id, rowData.contents);
});


// Adicione um ouvinte para o envio do formulário de edição
$('#editForm').submit(function (event) {
    // Impedir o envio padrão do formulário
    event.preventDefault();

    // Obter os valores dos campos
    var id = $('#editId').val();
    var contents = $('#editContents').val();

    // Aqui você pode realizar a lógica para atualizar os dados no servidor
    // ...

    // Fechar o modal após a conclusão da edição
    $('#editModal').modal('hide');
});









//endpoint de centile
$(document).ready(function () {
    $.ajax({
        url: '/parametros/getcustomparameters',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response)
            if (response.data) {
                console.log("1");
                
                tabela = $('#tabelaParametrosCentileBilling').DataTable({
                    searching: false,
                    lengthChange: false,
                    paging: false,
                    info: false,
                    "columnDefs": [
                        {
                            "width": "30%", // Define a largura da primeira coluna
                            "targets": 0 // Índice da primeira coluna (considerando 0 como a primeira)
                        },
                        {
                            "width": "30%", // Define a largura da segunda coluna
                            "targets": 1 // Índice da segunda coluna
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 2 // Índice da segunda coluna
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 3 // Índice da segunda coluna
                        }
                    ],
                    renderer: "bootstrap",
                    language: {
                        url: "//cdn.datatables.net/plug-ins/1.11.4/i18n/pt_br.json"
                    },

                    data: response.data,
                    columns: [
                        { "data": "plataforma", "title": "Plataforma"  }, 
                        { "data": "id", "title": "Id" },         
                        { "data": "valor", "title": "Valor" },
                        {
                            data: null,
                            defaultContent: '<button type="button" class="btn btn-primary btn-detalhes btn-editar">Editar</button>'
                        }
                    ]

                });
            } else {
                console.log('A resposta do servidor não contém dados.');
            }
            console.log("3");
        },

        error: function (error) {
            console.log(error);
        }
    });
});










//console.log("4GL BRASIL");
//Parâmetros 4GL BRASIL
$(document).ready(function () {
    $.ajax({
        url: '/parametros/getparametros',
        type: 'GET',
        data: { ids: JSON.stringify(["WINVOICE", "BINVOICE", "MINVOICE"]) },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.data) {
                console.log("1");
                tabela = $('#tabelaParametros4GLBrasil').DataTable({
                    searching: false,
                    lengthChange: false,
                    paging: false,
                    info: false,
                    renderer: "bootstrap",
                    "columnDefs": [
                        {
                            "width": "50%", 
                            "targets": 0 
                        },
                        {
                            "width": "50%",
                            "targets": 1 
                        },
                        {
                            "width": "30%", // Define a largura da segunda coluna
                            "targets": 2 // Índice da segunda coluna
                        }
                    ],
                    language: {
                        url: "//cdn.datatables.net/plug-ins/1.11.4/i18n/pt_br.json"
                    },
                    data: response.data,
                    columns: [
                        { "data": "id", "title": "ID" },
                        { "data": "contents", "title": "CONTENTS" },
                        { data: null, defaultContent: '<button type="button" class="btn btn-primary btn-detalhes">Editar</button>' }
                    ]
                });
            } else {
                console.log('A resposta do servidor não contém dados.');
            }
            console.log("3");
        },
        error: function (error) {
            console.log(error);
        }
    });
});




//Parâmetros 4GL CC
//console.log("4GL CC");
$(document).ready(function () {
    $.ajax({
        url: '/parametros/getparametros4GLCC',
        type: 'GET',
        data: { Ids: JSON.stringify(["PROX CDR RESUMO", "PROX MERA RESUMO", "PROX RESUMO", "PROX SUP RESUMO"]) },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.data) {
                console.log("1");
                tabela = $('#tabelaParametros4GLCC_Trafego').DataTable({
                    renderer: "bootstrap",
                    searching: false,
                    lengthChange: false,
                    paging: false,
                    info: false,
                    "columnDefs": [
                        {
                            "width": "50%", // Define a largura da primeira coluna
                            "targets": 0 // Índice da primeira coluna (considerando 0 como a primeira)
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 1 // Índice da segunda coluna
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 2 // Índice da segunda coluna
                        }
                    ],
                    language: {
                        url: "//cdn.datatables.net/plug-ins/1.11.4/i18n/pt_br.json"
                    },
                    data: response.data,
                    columns: [
                        { "data": "id", "title": "ID" },
                        { "data": "contents", "title": "CONTENTS" },
                        { data: null, defaultContent: '<button type="button" class="btn btn-primary btn-detalhes">Editar</button>' }
                    ]
                });
            } else {
                console.log('A resposta do servidor não contém dados.');
            }
            console.log("3");
        },
        error: function (error) {
            console.log(error);
        }
    });
});

$(document).ready(function () {
    $.ajax({
        url: '/parametros/getparametros4GLCC',
        type: 'GET',
        data: { Ids: JSON.stringify(["WINVOICE", "BINVOICE", "MINVOICE", "SBINVOICE", "SMINVOICE", "SWINVOICE"]) },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.data) {
                console.log("1");
                tabela = $('#tabelaParametros4GLCC_Billing').DataTable({
                    renderer: "bootstrap",
                    searching: false,
                    lengthChange: false,
                    paging: false,
                    info: false,
                    "columnDefs": [
                        {
                            "width": "50%", // Define a largura da primeira coluna
                            "targets": 0 // Índice da primeira coluna (considerando 0 como a primeira)
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 1 // Índice da segunda coluna
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 2 // Índice da segunda coluna
                        }
                    ],
                    language: {
                        url: "//cdn.datatables.net/plug-ins/1.11.4/i18n/pt_br.json"
                    },
                    data: response.data,
                    columns: [
                        { "data": "id", "title": "ID" },
                        { "data": "contents", "title": "CONTENTS" },
                        { data: null, defaultContent: '<button type="button" class="btn btn-primary btn-detalhes">Editar</button>' }
                    ]
                });
            } else {
                console.log('A resposta do servidor não contém dados.');
            }
            console.log("3");
        },
        error: function (error) {
            console.log(error);
        }
    });
});


//Parâmetros 4GL USA
//console.log("4GL USA");
$(document).ready(function () {
    console.log("4GL USA");
    $.ajax({
        url: '/parametros/getparametros4GLCC',
        type: 'GET',
        data: { Ids: JSON.stringify(["PROX CDR RESUMO", "PROX MERA RESUMO", "PROX RESUMO", "PROX SUP RESUMO"]) },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.data) {
                console.log("4GL USA");
                tabela = $('#tabelaParametros4GLUSA_Trafego').DataTable({
                    renderer: "bootstrap",
                    searching: false,
                    lengthChange: false,
                    paging: false,
                    info: false,
                    renderer: "bootstrap",
                    "columnDefs": [
                        {
                            "width": "50%", // Define a largura da primeira coluna
                            "targets": 0 // Índice da primeira coluna (considerando 0 como a primeira)
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 1 // Índice da segunda coluna
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 2 // Índice da segunda coluna
                        }
                    ],
                    language: {
                        url: "//cdn.datatables.net/plug-ins/1.11.4/i18n/pt_br.json"
                    },
                    data: response.data,
                    columns: [
                        { "data": "id", "title": "ID" },
                        { "data": "contents", "title": "CONTENTS" },
                        { data: null, defaultContent: '<button type="button" class="btn btn-primary btn-detalhes">Editar</button>' }
                    ]
                });
            } else {
                console.log('A resposta do servidor não contém dados.');
            }
            console.log("3");
        },
        error: function (error) {
            console.log(error);
        }
    });
});
$(document).ready(function () {
    console.log("4GL USA");
    $.ajax({
        url: '/parametros/getparametros4GLCC',
        type: 'GET',
        data: { Ids: JSON.stringify(["BINVOICE", "MINVOICE", "SBINVOICE", "SMINVOICE", "SWINVOICE", "WINVOICE"]) },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.data) {
                console.log("4GL USA");
                tabela = $('#tabelaParametros4GLUSA_Billing').DataTable({
                    searching: false, // Desativa a opção de pesquisa
                    lengthChange: false, // Remove a opção de mostrar a quantidade de registros
                    paging: false, // Remove os botões de navegação entre páginas
                    info: false, // Remove a informação de quantos registros estão sendo exibidos
                    renderer: "bootstrap",
                    "columnDefs": [
                        {
                            "width": "50%", // Define a largura da primeira coluna
                            "targets": 0 // Índice da primeira coluna (considerando 0 como a primeira)
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 1 // Índice da segunda coluna
                        },
                        {
                            "width": "50%", // Define a largura da segunda coluna
                            "targets": 2 // Índice da segunda coluna
                        }
                    ],
                    language: {
                        url: "//cdn.datatables.net/plug-ins/1.11.4/i18n/pt_br.json"
                    },
                    data: response.data,
                    columns: [
                        { "data": "id", "title": "ID" },
                        { "data": "contents", "title": "CONTENTS" },
                        { data: null, defaultContent: '<button type="button" class="btn btn-primary btn-detalhes">Editar</button>' }
                    ]
                });
            } else {
                console.log('A resposta do servidor não contém dados.');
            }
            console.log("3");
        },
        error: function (error) {
            console.log(error);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    let updatedFields = {};
    let changedFields = false;    

    function getAllUser() {
        $.ajax({
            contentType: 'application/json',
            url: '/allaccounts',
            type: 'GET',
            dataType: 'json',
            success: function (data) {

                let dataInfo = JSON.parse(data)
                let dataInfo = JSON.parse(dataInfo)

                if (dataInfo.length > 0) {
                    const usersData = dataInfo.map(user => ({
                        DT_RowId: user.Id,
                        ...user
                    }));

                    initDataTable(usersData);
                } else {
                    console.error('Erro ao buscar usuários:');
                }

            },
            error: function (response) {
                showToast('error', "Error: " + response); 
            }
        })
    }

    function updateUser(data, username) {
        $.ajax({
            contentType: 'application/json',
            url: '/updateUser',
            type: 'GET',
            data: data,
            dataType: 'json',
            success: function (response) {
                console.log(response)

                if (response.status === 'sucess') {
                    showToast('success', response.message);
                    $('#userDetailsModal').modal('hide');
                    setTimeout(function () {
                        location.reload(); // Recarrega a página após 3 segundos
                    }, 3000);
                } else {
                    showToast('error', response.message);
                    $('#userDetailsModal').modal('hide');
                }
            },
            error: function (error) {
                showToast('error', response.message);
                $('#userDetailsModal').modal('hide');
            }
        });
    }

    function deleteUser(userId, userName) {

        let data = { id: userId }

        $.ajax({
            contentType: 'application/json',
            url: '/deleteUser',
            type: 'GET',
            data: data,
            dataType: 'json',
            success: function (response) {
                console.log(response)
                if (response.status === 'sucess') {
                    showToast('success', `Usuário ${userName} excluído com sucesso.`);
                    $('#deleteUserModal').modal('hide');
                    setTimeout(function () {
                        location.reload(); // Recarrega a página após 3 segundos
                    }, 3000);
                } else {
                    showToast('error', `Erro ao excluir usuário ${userId}.`);
                    $('#deleteUserModal').modal('hide');
                }
            },
            error: function (error) {
                showToast('error', `Erro ao excluir usuário ${userId}.`);
                $('#deleteUserModal').modal('hide');
            }
        });
    }    

    function initDataTable(usersData) {
        const editor = new DataTable.Editor({
            ajax: {
                create: {
                    type: 'POST',
                    url: '',
                },
                edit: {
                    type: 'POST',
                    url: '',
                },
                remove: {
                    type: 'POST',
                    url: '', // Não é necessário definir uma URL aqui
                }
            },
            fields: [
                { label: 'Nome: ', name: 'Name' },
                { label: 'Email: ', name: 'Email' },
                { label: 'Creditos :', name: 'Credit' },
                { label: 'Criacao_conta:', name: 'Criacao_conta' },
                { label: 'Tipo de usuário:', name: 'Tipo_Usuario' },
                { label: 'Status:', name: 'Status' },
            ],
            table: '#TableUsers',
        });       

        const table = new DataTable('#TableUsers', {
            data: usersData,
            columns: [
                {
                    data: null,
                    defaultContent: '',
                    className: 'select-checkbox',
                    orderable: false, 
                    orderDataType: 'dom-checkbox', 
                    render: function (data, type, row) {
                        return data;
                    }
                },
                { data: 'Name'},
                { data: 'Email'},
                {
                    data: 'Credit',
                    render: function (data, type, row) {
                        if (type === 'display' || type === 'filter') {
                            // Formatando para exibir apenas 2 casas decimais
                            return parseFloat(data).toFixed(2);
                        }
                        return data;
                    }
                },
                {
                    data: 'Criacao_conta',
                    render: function (data, type, row) {
                        if (type === 'display') {
                            // Se for exibição, formatar a data
                            const date = new Date(data);
                            const formattedDate = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
                            return formattedDate;
                        }
                        return data;
                    }
                },
                { data: 'Tipo_Usuario'},
                { data: 'Status'},                
            ],
            columnDefs: [
                {
                    targets: 0, // O número do índice da coluna, começando em 0
                    className: 'checkbox-column', // Classe personalizada para o cabeçalho dessa coluna
                }
            ],
            language: {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                },
                "oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
                }
            },
            dom: 'Bfrtip',
            buttons: [
                //{
                //    //text: 'Novo',
                //    //className: 'btn btn-primary',
                //    //action: function () {                                                

                //    //    console.log('teste')

                //    //    let userCreateModal = document.getElementById('userCreateModal');
                //    //    let btnCreateUser = document.querySelector("#btnCreateUser");

                //    //    $('#userCreateModal').find('input, select').on('change input', function() {
                //    //        const field = this;
                //    //        validateField(field);
                //    //    });

                //    //    $('#userCreateModal').on('shown.bs.modal', function () {}).modal('show');
                                                                                       
                                                                                                          
                //    //}
                //},
                {
                    extend: 'edit',
                    editor: editor,
                    text: 'Detalhes',
                    className: 'btn btn-primary',                    
                    action: function (e, dt, node, config) {
                        // Obter os dados do usuário selecionado
                        const selectedRowData = dt.row({ selected: true }).data();
                        $('#userDetailsModal').modal('show');

                        $('#userDetailsModal').on('shown.bs.modal', function (e) {
                            if (selectedRowData) {

                                let userDetailsModal = document.getElementById('userDetailsModal');
                                let inputNome = userDetailsModal.querySelector('#inputNome');
                                let inputEmail = userDetailsModal.querySelector('#inputEmail'); let inputData = userDetailsModal.querySelector("#inputData")
                                let inputCreditos = userDetailsModal.querySelector("#inputCredits")

                                inputNome.value = selectedRowData.Name;
                                inputEmail.value = selectedRowData.Email;
                                inputData.value = selectedRowData.Criacao_conta;
                                const formattedCreditos = parseFloat(selectedRowData.Credit).toFixed(2);
                                inputCreditos.value = formattedCreditos;

                                let username = selectedRowData.Name

                                // Formatando a data para o formato desejado
                                const date = new Date(selectedRowData.Criacao_conta);
                                const formattedDate = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
                                inputData.value = formattedDate;

                                $('#userDetailsModal').on('click', 'button.btn-outline-secondary', function () {
                                    $('#userDetailsModal').modal('hide');
                                }).modal('show');

                                $('#userDetailsModal').on('change', 'input, select', function () {
                                    const fieldName = $(this).attr('name');
                                    const fieldValue = $(this).val();
                                    const userId = selectedRowData.id;
                                    updatedFields[userId] = updatedFields[userId] || {};
                                    updatedFields[userId][fieldName] = fieldValue;
                                    changedFields = true; // Marca a alteração
                                });

                                $('#userDetailsModal').on('click', '.btn-primary', function () {
                                    let userId = selectedRowData.Id;
                                    let userUpdates = updatedFields[userId];
                                    let creditos = $('#inputCredits').val();
                                    let TipoUsuario = $('#tipo_User option:selected').val();
                                    let status = $('#status_User option:selected').val();
                                    let email = $('#inputEmail').val();

                                    let data = {
                                        Id: userId,
                                        Credit: creditos,
                                        Email: email,
                                        Tipo_Usuario: TipoUsuario,
                                        Status: status
                                    };

                                    // Preenche os campos alterados no objeto data
                                    for (const fieldName in userUpdates) {
                                        const fieldValue = userUpdates[fieldName];
                                        if (fieldName === 'Credit' || fieldName === 'Email' || fieldName === 'Tipo_Usuario' || fieldName === 'Status') {
                                            data[fieldName] = fieldValue;
                                        }
                                    }


                                    console.log(data);
                                    updateUser(data, username);

                                    updatedFields[userId] = {}; 
                                });


                                let tipoUserSelect = userDetailsModal.querySelector("#tipo_User");
                                let statusSelect = userDetailsModal.querySelector("#status_User");
                                // Selecionando as opções corretas nos campos de seleção
                                tipoUserSelect.value = selectedRowData.Tipo_Usuario;
                                statusSelect.value = selectedRowData.Status;

                            }
                        })
                    }
                },
                {
                    extend: 'remove',
                    editor: editor,
                    text: 'Remover',
                    className: 'btn btn-primary',
                    action: function (e, dt, node, config) {
                        const selectedRowData = dt.row({ selected: true }).data();
                        $('#deleteUserModal').modal('show');

                        $('#deleteUserModal').on('shown.bs.modal', function (e) {                     

                            if (selectedRowData) {

                                let userId = selectedRowData.Id;
                                userName = selectedRowData.Name;

                                let userToDelete = document.querySelector("#userToDelete")

                                userToDelete.innerHTML = userName


                                $('#deleteUserModal').on('click', 'button.btn-danger', function () {            

                                    deleteUser(userId, userName);
                                });

                                
                            }
                        })

                        $('#deleteUserModal').on('click', 'button.btn-outline-secondary', function () {
                            $('#deleteUserModal').modal('hide');
                        }).modal('show');
                    }
                },
                {
                    extend: 'collection',
                    text: 'Exportar',
                    className: 'btn btn-primary',
                    buttons: [
                        'copy', 'excel', 'csv', 'pdf', 'print'
                    ]
                }
               
            ],
            select: {
                style: 'os',
                selector: 'td:first-child'
            }
        });
        
    }

    getAllUser()


    function showToast(status, message) {
        const icons = {
            success: 'success',
            error: 'error'
            // Adicione outros ícones conforme necessário
        };

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: icons[status],
            title: message
        });
    }

  
});
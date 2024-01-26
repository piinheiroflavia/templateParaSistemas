let $convertionRate = document.querySelector("#convertionRate")
let $PopupServiceCampanha = document.querySelector("#PopupCampanha")
let $PopupService = document.querySelector("#PopupService")
let $Popup2FA = document.querySelector("#Popup2FA")
let $PopupCredits = document.querySelector("#PopupCredits")

//PopUp2FA
// Funções para a requisão de API

let objListas30 = { listaQtdUtilizado: [], listaServicosEncontrados: [] };
let objListas7 = { listaQtdUtilizado: [], listaServicosEncontrados: [] };

// Recupere o token e a data de expiração dos atributos HTML
var token = document.getElementById('token').value;
var expirationDate = document.getElementById('expirationDate').value;
var tipoUser = document.getElementById('viewbagUsuario').value;

// Armazene o token e a data de expiração no localStorage
localStorage.setItem('token', token);
localStorage.setItem('expirationDate', expirationDate);


console.log("Token:", token);
console.log("Data de Expiração:", expirationDate);
console.log("ViewBag Usuario:", tipoUser);

$PopupServiceCampanha.addEventListener('click', ConvertionCampanhaDashboard)
$PopupService.addEventListener('click', ConvertionSMSDashboard)
$Popup2FA.addEventListener('click', TwoFaDashboard)
$PopupCredits.addEventListener('click', CreditsDashboard)

function GetINFO() {
    GetINFO2FA()
}

function ConvertionCampanhaDashboard() {
    popupDashboardCAMPANHA()
    createPieCAMPANHA()
}

function ConvertionSMSDashboard() {
    popupDashboard()
    createPieSMS()
}

function TwoFaDashboard() {
    popupDashboard2FA()
    createPie()
}

function CreditsDashboard() {
    popupDashboardCredits()
}

// PopUp 2FA
function createPie() {
    var options = {
        colors: ['#F1837F', '#60F291'],
        series: [objReponseNao, objReponseSim],
        chart: {
            width: 400,
            type: 'pie',
        },
        labels: ['Não confirmados', 'Confirmados'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 260,
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    if (document.body.contains(document.querySelector("#TwoFaTR"))) {
        let $TableValues = document.querySelector("#TwoFaTR")
        let TableChild = $TableValues.children

        TableChild[0].textContent = objData['qtd_total']
        TableChild[1].textContent = objData['qtd_sim']
        TableChild[2].textContent = objData['qtd_nao']
        TableChild[3].textContent = objData['porcentagem_sim'] + ' %'
        TableChild[4].textContent = objData['porcentagem_nao'] + ' %'
    }
}

function createPieSMS() {
    var options = {
        colors: ['#F1837F', '#60F291'],
        series: [objReponseNaoSMS, objReponseSimSMS],
        chart: {
            width: 400,
            type: 'pie',
        },
        labels: ['Não entregue', 'Entregue'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 260,
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#chartSMS"), options);
    chart.render();

    if (document.body.contains(document.querySelector("#ConversionSMS"))) {
        let $TableValues = document.querySelector("#ConversionSMS")
        let TableChild = $TableValues.children

        TableChild[0].textContent = objDataSMS.data.qtd_total
        TableChild[1].textContent = objDataSMS.data.total_valido
        TableChild[2].textContent = objDataSMS.data.numero_invalido
        TableChild[3].textContent = objDataSMS.data.entregue
        TableChild[4].textContent = objDataSMS.data.nao_entregue
        TableChild[5].textContent = objReponseSimSMS + ' %'
        TableChild[6].textContent = objReponseNaoSMS + ' %'
    }
}

function createPieCAMPANHA() {

    var options = {
        colors: ['#F1837F', '#60F291'],
        series: [objReponseNaoCAMPAIGN, objReponseSimCAMPAIGN],
        chart: {
            width: 400,
            type: 'pie',
        },
        labels: ['Não entregue', 'Entregue'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 260,
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#chartCAMPANHA"), options);
    chart.render();

    if (document.body.contains(document.querySelector("#ConversionCAMPAIGN"))) {
        let $TableValues = document.querySelector("#ConversionCAMPAIGN")
        let TableChild = $TableValues.children

        TableChild[0].textContent = objDataCAMPAIGN.data.qtd_total
        TableChild[1].textContent = objDataCAMPAIGN.data.total_valido
        TableChild[2].textContent = objDataCAMPAIGN.data.numero_invalido
        TableChild[3].textContent = objDataCAMPAIGN.data.entregue
        TableChild[4].textContent = objDataCAMPAIGN.data.nao_entregue
        TableChild[5].textContent = objReponseSimCAMPAIGN + ' %'
        TableChild[6].textContent = objReponseNaoCAMPAIGN + ' %'
    }
}


function EsconderElemento() {
    let $div1 = document.querySelector("#testeDisplay7")
    let $div2 = document.querySelector("#testeDisplay30")
    let $historico = document.querySelector("#historico")

    let select = document.querySelector("#selectDays")
    var $opcaoValue = select.options[select.selectedIndex].value;

    if ($opcaoValue == '30') {
        $historico.innerHTML = 'Histórico de uso (Ultimos 30 dias)'
        createDashboardPie2(objListas30.listaQtdUtilizado, objListas30.listaServicosEncontrados)
    }

    if ($div1.style.display === 'block') {
        $div1.style.display = 'none'
        $div2.style.display = 'block'
        $historico.innerHTML = 'Histórico de uso (Ultimos 30 dias)'
    } else {
        $div1.style.display = 'block'
        $div2.style.display = 'none'
        $historico.innerHTML = 'Histórico de uso (Ultimos 07 dias)'

    }
}

let listaqtdL;
let listaServicosL;
let colorsService = []


function colors() {

    for (let i = 0; i < listaqtdL; i++) {

        let services = listaServicosL[i]

        switch (services) {
            case "2FA":
                colorsService.push('#49B6D6')

                break
            case "Campaign SMS Alaris":
                colorsService.push('#00ACAC')

                break
            case "Campaign SMS MO":

                colorsService.push('#F59C1A')
                break

            case "Consultar Números":
                colorsService.push('#FF5B57')
                break

            case "TTS (Standard)":
                colorsService.push('#9883E5')
                break

            case "TTS (Improved)":
                colorsService.push('#1B3B6F')
                break

            case "Single SMS":
                colorsService.push('#27FB6B')
                break
            case "STT":
                colorsService.push('#FF5733')
                break
            case "Interconexao Voz":
                colorsService.push('#99c43b')
                break
            default:
                break
        }
    }
}

function createDashboardPie(listaqtd, listaServicos) {

    listaqtdL = listaqtd.length
    listaServicosL = listaServicos
    colors();

    const cor = COLOR_AQUA_TRANSPARENT_9;
    
    

    var options = {
        colors: colorsService,
        series: listaqtd,
        chart: {
            width: 520,
            type: 'pie',
        },
        labels: listaServicos,
        legend: {
            labels: {
                colors: cor,
              
                },
            },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,

                },
                legend: {
                    position: 'bottom'
                },
            }
        }]
    };

    setTimeout(function () {
        var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
        chart1.render();
    }, 1)

}

function createDashboardPie2(listaqtd, listaServicos) {

    colorsService = []
    listaqtdL = listaqtd.length
    listaServicosL = listaServicos

    colors()

    var options = {
        series: listaqtd,
        colors: colorsService,
        chart: {
            width: 520,
            type: 'pie',
        },
        labels: listaServicos,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,

                },
                legend: {
                    position: 'bottom'
                },
            }
        }]
    };

    setTimeout(function () {
        var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
        chart2.render();
    }, 1)

}

//2FA RESPONSE
let objReponseSim;
let objReponseNao;
let objData;

//SINGLE SMS RESPONSE

let objReponseSimSMS;
let objReponseNaoSMS;
let objDataSMS;

//CAMPAING RESPONSE

let objReponseSimCAMPAIGN;
let objReponseNaoCAMPAIGN;
let objDataCAMPAIGN;

//CREDITS RESPONSE
let dataCredits;

//USER INFO RESPONSE
let dataInfo

//DATA
let time;
let dataFormatt;

let serviceColors;

function GetINFO2FA() {
    let randomObj;

    $.ajax({
        contentType: 'application/json',
        url: '/conversion2fadash',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            objData = JSON.parse(data)
            console.log(objData)
            if (objData.error == 'Internal error - Contact email@email.com') {
                let bginfo = document.querySelector("#bg-info")
                //bginfo.style = 'background-color: #dee2e6'

                let widget2fa = document.querySelector("#widget2fa")
                widget2fa.style = "padding-bottom: 0px;"

                $Popup2FA.style.cursor = 'not-allowed'
                $Popup2FA.addEventListener('click', popupDashboardError)
                bginfo.style.height = '7.6rem'

                $convertionRate.style.fontSize = '1em'
                $convertionRate.textContent = 'Você não possui registros.'

                let tfaDetails = document.querySelector("#tfaDetails")
                tfaDetails.style.margin = '33px 1px 15px'

            } else {
                let porcentagem_nao = objData['porcentagem_nao']
                let porcentagem_sim = objData['porcentagem_sim']
                $convertionRate.textContent = porcentagem_sim + ' %'

                objReponseSim = porcentagem_sim
                objReponseNao = porcentagem_nao
            }
        }
    })

    $.ajax({
        contentType: 'application/json',
        url: '/conversionsms',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            objDataSMS = JSON.parse(data)


            if (objDataSMS.message == "Não existem informações sobre este usuário.") {
                ConvertionContent.textContent = 'Você não possui registros.'
                ConvertionContent.style.fontSize = '1em'

                $PopupService.style.cursor = 'not-allowed'
                $PopupService.addEventListener('click', popupDashboardError)

                let smsDetails = document.querySelector("#smsDetails")
                let smsBox = document.querySelector('#smsBox')
                let PopupService = document.querySelector("#PopupService")

                smsBox.style = "padding-bottom: 0px;"
                PopupService.style = "margin-top: -5px;"
                smsBox.style.height = '7.6rem'
                smsDetails.style.margin = '35px 1px 9px'


            } else {

                let porcentagem_simSMS = objDataSMS.data.porcentagem_sim
                let porcentagem_naoSMS = objDataSMS.data.porcentagem_nao
                let ConvertionContent = document.querySelector("#ConvertionContent")
                ConvertionContent.textContent = porcentagem_simSMS + '%'

                objReponseSimSMS = porcentagem_simSMS
                objReponseNaoSMS = porcentagem_naoSMS
            }

        }
    })

    $.ajax({
        contentType: 'application/json',
        url: '/conversioncampaign',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            objDataCAMPAIGN = JSON.parse(data)

            if (objDataCAMPAIGN.message == "Não existem informações sobre este usuário.") {
                convertionRateCAMPAIGN.textContent = 'Você não possui registros.'
                convertionRateCAMPAIGN.style.fontSize = '1em'


                $PopupServiceCampanha.style.cursor = 'not-allowed'
                $PopupServiceCampanha.addEventListener('click', popupDashboardError)

                let widgetcampanha = document.querySelector("#widgetcampanha")
                widgetcampanha.style = "padding-bottom: 0px;"

                let campaignDetails = document.querySelector("#campaignDetails")
                campaignDetails.style.margin = '34px 1px 15px'

            } else {

                let porcentagem_simCAMPAIGN = objDataCAMPAIGN.data.porcentagem_sim
                let porcentagem_naoCAMPAIGN = objDataCAMPAIGN.data.porcentagem_nao

                let convertionRateCAMPAIGN = document.querySelector("#convertionRateCAMPAIGN")
                convertionRateCAMPAIGN.textContent = porcentagem_simCAMPAIGN + '%'

                objReponseSimCAMPAIGN = porcentagem_simCAMPAIGN
                objReponseNaoCAMPAIGN = porcentagem_naoCAMPAIGN
            }


        }
    })

    $.ajax({
        contentType: 'application/json',
        url: '/dashupdatedusage',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            let randomObj = JSON.parse(data)

            if (randomObj.sete.lista7Dias.length == 0 && randomObj.trinta.lista30Dias.length == 0) {
                let notRegisterDash = document.querySelector("#notRegisterDash")
                let testeDisplay7 = document.querySelector("#testeDisplay7")

                testeDisplay7.style.display = 'none'
                notRegisterDash.style.display = 'block'

            } else {
                randomObj.sete.lista7Dias.forEach(CriarLista, "7")
                randomObj.trinta.lista30Dias.forEach(CriarLista, "3")
                createDashboardPie(objListas7.listaQtdUtilizado, objListas7.listaServicosEncontrados)
            }


        }
    })

    $.ajax({

        contentType: 'application/json',
        url: '/usercredithistory',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            let dataCreditsJSON = JSON.parse(data)
            dataCredits = dataCreditsJSON

            let creditsContent = document.querySelector("#creditsContent")
            let creditsContentBRL = document.querySelector("#creditsContentBRL")
            let sum = 0;

            let PopupCredits = document.querySelector("#PopupCredits")

            for (let i = 0; i < dataCredits.creditInputHistory.length; i++) {
                sum += dataCredits.creditInputHistory[i].credito_Inserido;

            }
            creditsContent.textContent = 'Créditos: ' + sum
        }
    })

    $.ajax({

        contentType: 'application/json',
        url: '/creationtime',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            let dataCriacaoJSON = JSON.parse(data)
            dataCriacao = dataCriacaoJSON

            let dateResponse = document.querySelector('#dateResponse')
            /*let timeResponse = document.querySelector('#timeResponse')*/


            let dataTempo = dataCriacao.dataCriacao.substring(0, 10);
            time = dataCriacao.dataCriacao.substring(11, 19);
            let dataSplit = dataTempo.split("-")

            dataFormatt = `${dataSplit[2]}/${dataSplit[1]}/${dataSplit[0]}`



        }
    })

    $.ajax({

        contentType: 'application/json',
        url: '/respostaTudo',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            let dataInfo = JSON.parse(data)
            /*dataInfo = JSON.parse(dataInfo)*/

            console.log(dataInfo[0].servico)

            
            if (dataInfo.length == 0) {

                let thService = document.querySelector("#thService")
                let notRegister = document.querySelector("#notRegister")
                let total = document.querySelector("#total")

                thService.style.display = "none";
                notRegister.style.display = "block";
                total.style.display = 'none'


            } else {
                for (let i = 0; i < dataInfo.length; i++) {
                    let tr = numberInputElementCreator2('tr', 'align-items-end', '')

                    let tdLabel;
                    let label;

                    console.log(dataInfo[0].servico)

                    if (dataInfo[i].servico == "Portabilidade") {
                        dataInfo[i].servico = "Consultar Números";
                    }

                    label = numberInputElementCreator2('label', 'labelService', 'label', dataInfo[i].servico)
                    tdLabel = numberInputElementCreator2('td', '', 'tdLabel', '')

                    tdLabel.append(label)
                    tr.append(tdLabel)
                    tr.append(numberInputElementCreator2('td', '', 'tdLabel', dataInfo[i].qtd))
                    tr.append(numberInputElementCreator2('td', '', 'tdLabel', dataInfo[i].total_utilizado))
                    let tableHistory = document.querySelector("#tableHistory")
                    tableHistory.append(tr)
                }

                const serviceLength = dataInfo.length

                let labelService = document.querySelectorAll("#labelService")
                let tableChild = labelService

                for (let i = 0; i < serviceLength; i++) {

                    let services = labelService[i].textContent


                    switch (services) {
                        case "2FA":
                            tableChild[i].classList.add("label-info")
                            break
                        case "Campaign SMS Alaris":
                            tableChild[i].classList.add("label-success")
                            break
                        case "Campaign SMS MO":
                            tableChild[i].classList.add("label-warning")
                            break
                        case "Consultar Números":
                            tableChild[i].classList.add("label-danger")
                            break
                        case "TTS (Standard)":
                            tableChild[i].classList.add("label-modify1")
                            break
                        case "TTS (Improved)":
                            tableChild[i].classList.add("label-modify3")
                            break
                        case "Single SMS":
                            tableChild[i].classList.add("label-modify2")
                            break
                        case "STT":
                            tableChild[i].classList.add("label-modify4")
                            break
                        case "Interconexao Voz":
                            tableChild[i].classList.add("label-modify5")                            
                        default:                            
                            break
                    }
                }

                let qtd_total = document.querySelector("#qtd_total")
                let qtd_credito = document.querySelector("#qtd_credito")

                let sum = 0;
                let sum2 = 0;


                for (let i = 0; i < dataInfo.length; i++) {

                    sum += dataInfo[i].qtd;
                    sum2 += dataInfo[i].total_utilizado;

                }

                qtd_total.textContent = sum

                let totalCredit = sum2.toFixed(2)
                qtd_credito.textContent = totalCredit

            }
        }
    })

}


function popupDashboard() {
    Swal.fire({
        template: '#my-templateDashboard',
        toast: false,
        width: 800,
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
        },
    })

}

function popupDashboardCAMPANHA() {
    Swal.fire({
        template: '#my-templateDashboardCAMPANHA',
        toast: false,
        width: 800,
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
        },
    })
}

function popupDashboard2FA() {
    Swal.fire({
        template: '#my-templateDashboard2FA',
        toast: false,
        width: 800,
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
        },
    })
}


function popupDashboardCredits() {
    Swal.fire({
        template: '#my-templateDashboardCredits',
        toast: false,
        width: 800,
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
        },
    })


    for (let i = 0; i < dataCredits.creditInputHistory.length; i++) {

        numberInputElementCreator('tr', '', 'id', 'userCredits', '')

        numberInputElementCreator('th', '', 'idTransacao', 'userCredits', '1004')
        numberInputElementCreator('th', '', 'idData', 'userCredits', dataCredits.creditInputHistory[i].data)
        numberInputElementCreator('th', '', 'idValor', 'userCredits', dataCredits.creditInputHistory[i].credito_Inserido)
        numberInputElementCreator('th', '', 'idValorBRL', 'userCredits', 'R$ ' + dataCredits.creditInputHistory[i].credito_Inserido)
    }

    let qtd_totalPOPUP = document.querySelector("#qtd_totalPOPUP")
    let qtd_creditoPOPUP = document.querySelector("#qtd_creditoPOPUP")
    let dateResponse = document.querySelector('#dateResponse')

    let sum = 0
    let sum2 = 0

    for (let i = 0; i < dataInfo.length; i++) {

        sum += dataInfo[i].qtd;
        sum2 += dataInfo[i].total_utilizado;

    }

    dateResponse.textContent = "Data de criação da conta: " + dataFormatt
    qtd_totalPOPUP.textContent = "Total de serviços: " + sum

    let totalCreditos = sum2.toFixed(2)
    qtd_creditoPOPUP.textContent = "Total de créditos utilizados: " + totalCreditos
}

function popupDashboardError() {

    const popupError = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    popupError.fire({
        icon: 'error',
        title: 'Você não possui registros'
    })

}

function numberInputElementCreator2(element, id, className, content) {
    let newElement = document.createElement(element)
    newElement.className = className
    newElement.textContent = content
    newElement.id = id
    return newElement;
}

function numberInputElementCreator(element, className, id, elementPai, content) {
    let newElement = document.createElement(element)
    newElement.id = id
    newElement.className = className
    newElement.textContent = content
    document.querySelector(`#${elementPai}`).appendChild(newElement);
}


function CriarLista(elemento) {
    let letra = this[0]

    if (elemento.servico === "Portabilidade") {
        elemento.servico = "Consultar Números";
    }
    if (letra == "7") {
        objListas7.listaServicosEncontrados.push(elemento.servico)
        objListas7.listaQtdUtilizado.push(elemento.qtd)
    } else {
        objListas30.listaServicosEncontrados.push(elemento.servico)
        objListas30.listaQtdUtilizado.push(elemento.qtd)
    }
}

let credits = document.querySelector("#infoCredits")
if (credits.value == "Você possui créditos.") {
    window.location.href = "/logout";
}


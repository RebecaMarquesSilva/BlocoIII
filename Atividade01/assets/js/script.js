let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#textoNome')
    
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido!'
        txtNome.style.color = 'green'
        
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#textoEmail')
    
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido!'
        txtEmail.style.color = 'green'

        emailOk = true
    }
}

function validaAssunto() {
    var txtAssunto = document.querySelector('#textoAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Digite no máximo 100 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'

        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else alert("Preencha o formulário corretamente")
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '550px'
    mapa.style.height = '400px'
}

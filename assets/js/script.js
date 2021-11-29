let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false

nome.style.width = '100%'


function validaNome() {

    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = '#6c3c7c' 
    } else {
        txtNome.innerHTML = 'Nome Válido!'
        txtNome.style.color = '#ccb4d4'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail Inválido!'
        txtEmail.style.color = '#6c3c7c'
    } else {
        txtEmail.innerHTML = 'E-mail Válido!'
        txtEmail.style.color = '#ccb4d4'
        emailOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar!')
    }
}
function validarSenha() {
    var nome = document.getElementById('name').value;
    let pconfirm = document.getElementById('p-confirm')
    var user = document.getElementById('user');
    var senha = document.getElementById('password').value;
    var senhaC = document.getElementById('confirmpassword').value;
    if (senha != senhaC) {
        pconfirm.textContent = 'Senhas nao correspondem :('
    } else if (senha.length === 0) {
        pconfirm.innerHTML = '<strong>Preencha todos os campos</strong> :)'

    }
    else {
        confirmarSenha()
    }
}
function confirmarSenha() {
    let container = document.getElementById('container');
    let login = document.getElementById('sucesslogin');
    login.style.display = 'inline';
    container.style.display = 'none';
    user.textContent = nome;
}
// senha = document.getElementsByName('senha').value;
// senhaC = document.getElementsByName('senhaC').value;

//     if (senha != senhaC) {
//         senhaC.setCustomValidity("Senhas diferentes!");
//         return false;
//     } else {
//         return true;
//     }
// }

function adicionarRespostas() {
    var chatMessages = document.getElementById("chat-messages");
    var respostas = [
        "Friend: Olá!",
        "Friend: Como você está?",
        // Adicione mais mensagens de resposta conforme desejado
    ]; var resp = respostas.toString();


    // Iterar pela matriz de respostas e adicionar divs de resposta ao chat
    for (var i = 0; i < respostas.length; i++) {
        var div = document.createElement("div");
        div.className = "message-resposta";
        div.textContent = respostas[i];
        chatMessages.appendChild(div);
    }

    var now = new Date();
    var div = document.createElement("div");
    div.className = "message-resposta";
    div.textContent = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Rolar para a última mensagem
}
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() === "") {
        return;
    }

    var chatMessages = document.getElementById("chat-messages");
    var messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.textContent = "Você: " + message;
    chatMessages.appendChild(messageDiv);

    messageInput.value = ""; // Limpar o campo de entrada após enviar a mensagem
    setTimeout(adicionarRespostas, 1200);
}
document.addEventListener("DOMContentLoaded", function () {
    var messageInput = document.getElementById("message-input");
    messageInput.focus();
});
// mudar chat
var nomeComunidade = document.getElementById("h1");

// Obtém a referência para o elemento com o id "chat1"
var chat1 = document.getElementById("chat1");
var chat2 = document.getElementById("chat2");
var chat3 = document.getElementById("chat3");
var chat4 = document.getElementById("chat4");
var chat5 = document.getElementById("chat5");
var chat6 = document.getElementById("chat6")
// Adiciona um ouvinte de evento de clique ao chat1
chat1.addEventListener("click", function () {
    nomeComunidade.textContent = 'Sky children of the Light';
    chat1.classList.add("borda");

});

chat2.addEventListener("click", function () {
    // Atualiza o conteúdo de texto de nomeComunidade para 'Valorant'
    nomeComunidade.textContent = 'Goulart';
    chat2.classList.add("borda");
});
chat3.addEventListener("click", function () {
    // Atualiza o conteúdo de texto de nomeComunidade para 'Valorant'
    nomeComunidade.textContent = 'Valorant';
    chat3.classList.add("borda");

});
chat4.addEventListener("click", function () {
    // Atualiza o conteúdo de texto de nomeComunidade para 'Valorant'
    nomeComunidade.textContent = 'The sims 4';
    chat4.classList.add("borda");


});
chat5.addEventListener("click", function () {
    // Atualiza o conteúdo de texto de nomeComunidade para 'Valorant'
    nomeComunidade.textContent = 'Minecraft';
    chat5.classList.add("borda");

});
chat6.addEventListener("click", function () {
    // Atualiza o conteúdo de texto de nomeComunidade para 'Valorant'
    nomeComunidade.textContent = 'Cities Skylines';
    chat6.classList.add("borda");

});
chat1.classList.remove("borda")
chat2.classList.remove("borda")
chat3.classList.remove("borda")
chat4.classList.remove("borda")
// Adiciona o ouvinte de evento para cada elemento de chat


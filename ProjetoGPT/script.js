async function sendMessage(){
    const ChatBox = document.getElementById("ChatBox");
    const userInput = document.getElementById("UserInput");
    const userMessage = userInput.ariaValueMax;

    if(!userMessage) return;

    // Adicionar mensagens do usuario
    const userDiv = document.getElementById("div");
    userDiv.className = "user-message message";
    userDiv.textContent = userMessage;
    ChatBox.appendChild(userDiv);

    // Limpar o campo de entrada 
    userInput.value = "";

    // Fazer scrool automático para a última mensagem
    ChatBox.scrollTop = ChatBox.scrollHeight;

    // Configuração do endpoint e chave da API
    const endpoint = "https://ai-bryaninacio24612ai590862336081.openai.azure.com";
    const apiKey = "7gvnw4JhimRKA8IGLZ6s1TZ4KRzKJmbHTpnBUoYcBHaXXKVVKclaJQQJ99BCACHYHv6XJ3w3AAAAACOGVdwB";
    const deploymentId = "gpt-35-turbo"; // Nome do endpoint no Azure OpenIA
    const apiVersion = "2024-05-01-preview"; // Verifique a versão na documentação





}
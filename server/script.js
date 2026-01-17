const sendbtn = document.querySelector('#submit');
const headr = document.querySelector('#sucessComment');
const form = document.querySelector('#contact');

sendbtn.addEventListener("click", async function (event) {
    event.preventDefault();
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var avaliacao = document.getElementById("number").value;
    var tema = document.getElementById("topic").value;
    var comentario = document.getElementById("comments").value;

     if (!nome || !email || !avaliacao || !tema || !comentario) {
        headr.innerHTML = "Por favor, preencha todos os campos.";
        headr.style.color = "orange";
        return;
    }

    var comment = {
    nome: nome,
    email: email,
    avaliacao: avaliacao,
    tema: tema,
    comentario: comentario,
    };
    
    sendbtn.disabled = true;
    sendbtn.textContent = "Enviando...";

    // var comment = new commentsSent();
    
    await commentsSent(comment);
    
});

async function commentsSent(comment) {
    try {
        const response = await fetch("http://localhost:3000/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        });

        if (response.ok) {
            headr.innerHTML = "";
            const result = await response.text();
            console.log("✅ Comentário enviado com sucesso:", result);
            headr.innerHTML = "Comentário enviado com sucesso!";
            headr.style.color = "green";
            form.reset(); // limpa o formulário
        } else {
            console.error("❌ Erro no envio:", response.statusText);
            headr.innerHTML = "Erro ao enviar comentário. Tente novamente.";
            headr.style.color = "red";
        }
    } catch (error) {
        console.error("⚠️ Erro de conexão:", error);
        headr.innerHTML = "Falha de conexão com o servidor.";
        headr.style.color = "red";
    } finally {
        sendbtn.disabled = false;
        sendbtn.textContent = "Enviar";
        headr.innerHTML = " ";
        headr.style.color = "transparent";

      }
}


// loading 
let imagesloaded = 0;
const totalImages = document.images.length;

document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const contentScreen = document.getElementById('content');
    Array.from(document.images).forEach(imagem)=> {
        imagesloaded++;
        if (imagesloaded === totalImages) {
            loadingScreen.style.display = 'none';
            contentScreen.style.display = 'block';
        }
    }
})
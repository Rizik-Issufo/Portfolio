const form = document.getElementById("commentForm");
    const header = document.getElementById("sucessComment");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const comment = {
        nome: document.getElementById("name").value,
        email: document.getElementById("email").value,
        avaliacao: document.getElementById("number").value,
        tema: document.getElementById("topic").value,
        comentarios: document.getElementById("comments").value
      };

      try {
        const response = await fetch("localhost:3000/comment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(comment)
        });

        if (response.ok) {
          header.textContent = "Comentário enviado com sucesso!";
          header.style.color = "green";
          form.reset();
        } else {
          header.textContent = "Erro ao enviar comentário.";
          header.style.color = "red";
        }
      } catch (err) {
        header.textContent = "Erro de conexão com o servidor.";
        header.style.color = "red";
        console.error(err);
      }
    });
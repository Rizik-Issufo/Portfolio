const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const port = 3000;

// Permitir JSON e CORS
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta "public" (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Conexão com MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "nodeuser",
  password: "Amaderadek",
  database: "portfolio",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erro ao conectar com o MySQL:", err);
  } else {
    console.log("✅ Conectado ao MySQL com sucesso!");
  }
});

// Rota para salvar comentários
app.post("/comment", (req, res) => {
  const data = req.body;
  const query = `
    INSERT INTO comments (nome, email, avaliacao, tema, comentario)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [data.nome, data.email, data.avaliacao, data.tema, data.comentario],
    (err) => {
      if (err) {
        console.error("❌ Erro ao salvar no banco:", err);
        res.status(500).send("Erro ao salvar dados");
      } else {
        console.log("✅ Comentário salvo com sucesso!");
        res.status(200).send("Comentário salvo com sucesso!");
      }
    }
  );
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Plataforma SaaS</h1>
    <a href="/dashboard">Entrar</a>
  `);
});

app.get("/dashboard", (req, res) => {
  res.send(`
    <h2>Dashboard</h2>
    <p>Plataforma ativa</p>
    <button onclick="alert('Plano PRO: R$99/mês')">
      Ver planos
    </button>
  `);
});

app.listen(PORT, () => {
  console.log("Rodando em http://localhost:" + PORT);
});
import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

const times = [
  { id: 1, nome: "Grêmio", estadio: "Arena do Grêmio", cidade: "Porto Alegre" },
  { id: 2, nome: "Internacional", estadio: "Beira-Rio", cidade: "Porto Alegre" },
  { id: 3, nome: "Juventude", estadio: "Alfredo Jaconi", cidade: "Caxias do Sul" }
];

app.get("/", (req, res) => {
  res.render("index", { mensagem: "Bem-vindo ao catálogo de times!" });
});

app.get("/times", (req, res) => {
  res.render("times", { times });
});

app.get("/times/:id", (req, res) => {
  const id = Number(req.params.id);
  const time = times.find(time => time.id === id);

  if (!time) {
    return res.status(404).send("Time não encontrado.");
  }

  res.render("detalhe", { time });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

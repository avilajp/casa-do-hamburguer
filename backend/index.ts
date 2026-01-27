import express from "express";
import { connection } from "./src/db.js";

const app = express();
connection();

console.log(process.env.DATABASE_URL);

app.get("/", (req, res) => {
  res.json("Você Acessou a Raiz da Aplicação!!!");
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000!!!");
});

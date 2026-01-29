import express from "express";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connection();

console.log(process.env.DATABASE_URL);

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Email e senha são obrigatórios" });
      return;
    }

    const user = await prisma.user.findFirst({
      where: {
        //quando se tem nomes iguais, pode mandar só 'email' sem o 'email: email'
        //porém, para clareza, vou deixar os dois
        email,
        password: password,
      },
    });

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    //posso passar o (user) direto, pq ele já é um objeto JSON ou então
    // posso passar uma mensagem personalizada
    // res.json({ message: "Usuário encontrado com sucesso", user });
    res.status(200).json(user);
  } catch (error) {}
});

app.post("/register", async (req, res) => {
  const { name, email, password, cep } = req.body;

  const users = await prisma.user.create({
    data: {
      name,
      email,
      password,
      cep,
    },
  });
  //posso passar o (users) direto, pq ele já é um objeto JSON ou então
  // posso passar uma mensagem personalizada
  // res.json({ message: "Usuário cadastrado com sucesso", users });
  res.json(users);
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000!!");
});

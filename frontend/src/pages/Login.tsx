import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="md-4" />
        </Link>

        <Input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="text-sm font-bold text-red-500">
          Usuário não encontrado.
        </p>

        <Button title="Fazer Login" type="submit" />
        <Link to="/register" className="w-full">
          <Button title="Não tenho uma Conta" variant="outline" />
        </Link>

        {/* <Link to="/register" className="mt-4 text-sm text-white underline">
          Não possui uma conta? Cadastre-se
        </Link> */}
      </div>
    </form>
  );
};

export default Login;

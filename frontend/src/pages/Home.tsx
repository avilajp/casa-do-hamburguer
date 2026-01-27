import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Link to="/login">Go to Login</Link>
      <Link to="/register">Página de Registro de Usuário</Link>
    </div>
  );
};

export default Home;

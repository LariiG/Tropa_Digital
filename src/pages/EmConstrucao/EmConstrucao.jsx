import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import "./EmConstrucao.scss";

export default function EmConstrucao() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="em-construcao-container">
      <h1>🚧 Página em Construção</h1>
      <p>Estamos trabalhando nessa funcionalidade.</p>
      <div className="botoes">
        <button onClick={() => navigate("/dashboard")} className="btn">
          Voltar ao Dashboard
        </button>
        <button onClick={handleLogout} className="btn btn-secundario">
          Sair
        </button>
      </div>
    </div>
  );
}

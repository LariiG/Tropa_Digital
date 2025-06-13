import "./Login.scss";
import loginSideImg from "../../assets/images/login-side-image.png";
import tropaLogo from "../../assets/icons/tropa-logo.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useState } from "react";
import EyeIcon from "../../assets/icons/eye.svg";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && senha) {
      login();
      navigate("/dashboard");
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-content">
          <img src={tropaLogo} alt="Logo Tropa Digital" className="logo" />

          <h2>Bem-vindo de volta</h2>
          <p>Entre com sua conta para acessar o painel.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="seunome@pagueservidor.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="senha">Senha</label>
            <div className="password-wrapper">
              <input
                id="senha"
                type={mostrarSenha ? "text" : "password"}
                placeholder="Digite aqui"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                type="button"
                className="eye-icon"
                aria-label={mostrarSenha ? "Esconder senha" : "Mostrar senha"}
                onClick={() => setMostrarSenha((prev) => !prev)}
              >
                <img src={EyeIcon} alt="Mostrar senha" />
              </button>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className="login-image">
          <div className="image-background">
            <img src={loginSideImg} alt="Login Visual" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import "./Sidebar.scss";
import tropaLogo from "../../assets/icons/tropa-logo.svg";

import DashboardIcon from "../../assets/icons/dashboard.svg?react";
import EventosIcon from "../../assets/icons/eventos.svg?react";
import EquipesIcon from "../../assets/icons/equipes.svg?react";
import InscricoesIcon from "../../assets/icons/inscricoes.svg?react";
import AlterarDadosIcon from "../../assets/icons/alterardados.svg?react";
import SairIcon from "../../assets/icons/sair.svg?react";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="top">
        <div className="logo-wrapper">
          <img src={tropaLogo} alt="Logo" />
        </div>

        <div className="menu-title">MENU</div>

        <div className="menu-links-wrapper">
          <ul>
            <li className={location.pathname === "/dashboard" ? "active" : ""}>
              <Link to="/dashboard">
                <DashboardIcon className="menu-icon" />
                Dashboard
              </Link>
            </li>

            <li className={location.pathname === "/eventos" ? "active" : ""}>
              <Link to="/eventos">
                <EventosIcon className="menu-icon" />
                Eventos
              </Link>
            </li>

            <li className={location.pathname === "/equipes" ? "active" : ""}>
              <Link to="/equipes">
                <EquipesIcon className="menu-icon" />
                Equipes
              </Link>
            </li>

            <li className={location.pathname === "/inscricoes" ? "active" : ""}>
              <Link to="/inscricoes">
                <InscricoesIcon className="menu-icon" />
                Inscrições
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        <div className="user-info">
          <div className="user-avatar">
            <img src="/src/assets/images/usuario.jpg" alt="Usuário" />
          </div>
          <div className="details">
            <strong>Kaique Steck</strong>
            <span>Administrador</span>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/em-construcao" className="menu-link">
            <AlterarDadosIcon className="menu-icon" />
            <span>Alterar dados</span>
          </Link>
          <button onClick={handleLogout} className="menu-link">
            <SairIcon className="menu-icon" />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

import "./Dashboard.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import EventTable from "../../components/EventTable/EventTable";
import NewEventModal from "../../components/NewEventModal/NewEventModal";
import { useState, useEffect } from "react";
import ResumoCards from "../../components/ResumoCards/ResumoCards";

const ITENS_POR_PAGINA = 5;

export default function Dashboard() {
  const [eventos, setEventos] = useState([
    {
      id: 1,
      nome: "Clube do Laço Conexão Pantaneiro",
      equipes: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
    },
    {
      id: 2,
      nome: "Desafio Nacional de Laço",
      equipes: 15,
      status: "Ativo",
      data: "20 a 22 de Julho",
    },
    {
      id: 3,
      nome: "Desafio Nacional de Laço",
      equipes: 15,
      status: "Ativo",
      data: "20 a 22 de Julho",
    },
    {
      id: 4,
      nome: "Desafio Nacional de Laço",
      equipes: 15,
      status: "Ativo",
      data: "20 a 22 de Julho",
    },
    {
      id: 5,
      nome: "Desafio Nacional de Laço",
      equipes: 15,
      status: "Ativo",
      data: "20 a 22 de Julho",
    },
    {
      id: 6,
      nome: "Desafio Nacional de Laço",
      equipes: 15,
      status: "Ativo",
      data: "20 a 22 de Julho",
    },
    {
      id: 7,
      nome: "Clube do Laço Conexão Pantaneiro",
      equipes: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
    },
    {
      id: 8,
      nome: "Clube do Laço Conexão Pantaneiro",
      equipes: 10,
      status: "Inativo",
      data: "09 a 11 de Junho",
    },
  ]);

  const [resumo, setResumo] = useState({ eventos: 0, equipes: 0, atletas: 0 });
  const [showModal, setShowModal] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [busca, setBusca] = useState("");

  const eventosFiltrados = eventos.filter((evento) =>
    evento.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const totalPaginas = Math.ceil(eventosFiltrados.length / ITENS_POR_PAGINA);

  const eventosPaginados = eventosFiltrados.slice(
    (paginaAtual - 1) * ITENS_POR_PAGINA,
    paginaAtual * ITENS_POR_PAGINA
  );

  const handleAddEvento = (novoEvento) => {
    setEventos((prev) => [...prev, novoEvento]);
    setPaginaAtual(1);
  };

  useEffect(() => {
    const totalEventos = eventos.length;
    const totalEquipes = eventos.reduce((acc, e) => acc + Number(e.equipes), 0);
    const totalAtletas = totalEquipes * 3;

    setResumo({
      eventos: totalEventos,
      equipes: totalEquipes,
      atletas: totalAtletas,
    });
  }, [eventos]);

  useEffect(() => {
    if (paginaAtual > totalPaginas) {
      setPaginaAtual(1);
    }
  }, [busca, totalPaginas, paginaAtual]);

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-content">
        <header>
          <p>Bem-vindo de volta, Kaique Steck</p>
          <h1>Todos Eventos</h1>
        </header>

        <ResumoCards resumo={resumo} />

        <section className="event-table-section">
          <h2>Próximos eventos</h2>
          <EventTable
            eventos={eventosPaginados}
            onAddClick={() => setShowModal(true)}
            totalPaginas={totalPaginas}
            paginaAtual={paginaAtual}
            mudarPagina={setPaginaAtual}
            busca={busca}
            setBusca={setBusca}
          />
        </section>

        {showModal && (
          <NewEventModal
            onClose={() => setShowModal(false)}
            onSave={handleAddEvento}
          />
        )}
      </main>
    </div>
  );
}

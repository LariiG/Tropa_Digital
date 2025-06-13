import "./EventTable.scss";
import { FiSearch } from "react-icons/fi";

export default function EventTable({
  eventos,
  onAddClick,
  busca,
  setBusca,
  totalPaginas,
  paginaAtual,
  mudarPagina,
}) {
  return (
    <div className="event-table">
      <div className="table-actions">
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar eventos"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        <button onClick={onAddClick}>+ Inserir novo</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome do evento</th>
            <th>Total de equipes</th>
            <th>Status</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {eventos.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                style={{ textAlign: "center", padding: "20px", color: "#666" }}
              >
                Não encontrado
              </td>
            </tr>
          ) : (
            eventos.map((evento) => (
              <tr key={evento.id}>
                <td>{evento.nome}</td>
                <td>{evento.equipes}</td>
                <td>
                  <span
                    className={`status ${evento.status.toLowerCase()}`}
                  ></span>
                  {evento.status}
                </td>
                <td>{evento.data}</td>
                <td>...</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => mudarPagina(1)}
          disabled={paginaAtual === 1}
          title="Primeira página"
        >
          «
        </button>

        <button
          onClick={() => mudarPagina(paginaAtual - 1)}
          disabled={paginaAtual === 1}
          title="Anterior"
        >
          ‹
        </button>

        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => mudarPagina(i + 1)}
            className={paginaAtual === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => mudarPagina(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
          title="Próxima"
        >
          ›
        </button>

        <button
          onClick={() => mudarPagina(totalPaginas)}
          disabled={paginaAtual === totalPaginas}
          title="Última página"
        >
          »
        </button>
      </div>
    </div>
  );
}

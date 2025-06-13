import "./ResumoCards.scss";

export default function ResumoCards({ resumo }) {
  return (
    <section className="summary-cards">
      <div className="card">
        <h2>{resumo.eventos}</h2>
        <p>Eventos cadastrados</p>
      </div>
      <div className="card">
        <h2>{resumo.equipes}</h2>
        <p>Equipes inscritas</p>
      </div>
      <div className="card">
        <h2>{resumo.atletas}</h2>
        <p>Atletas participantes</p>
      </div>
    </section>
  );
}

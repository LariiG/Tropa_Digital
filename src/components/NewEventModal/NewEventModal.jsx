import "./NewEventModal.scss";
import { useState } from "react";

export default function NewEventModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    nome: "",
    equipes: "",
    status: "Ativo",
    data: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nome && formData.equipes && formData.data) {
      onSave({ ...formData, id: Date.now() });
      onClose();
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Novo Evento</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome do evento</label>
          <input name="nome" value={formData.nome} onChange={handleChange} />

          <label>Total de equipes</label>
          <input
            name="equipes"
            type="number"
            value={formData.equipes}
            onChange={handleChange}
          />

          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>

          <label>Data</label>
          <input name="data" value={formData.data} onChange={handleChange} />

          <div className="modal-actions">
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

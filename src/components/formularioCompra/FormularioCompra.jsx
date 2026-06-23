import { useState } from "react";
import "./FormularioCompra.css";

function FormularioCompra({ onSalvar, onCancelar }) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");

  function confirmar(event) {
    // nao reinicia a pagina
    event.preventDefault();

    if (!nome.trim() || !valor || !quantidade) return;

    onSalvar({
      nome: nome.trim(),
      valor: Number(valor),
      quantidade: Number(quantidade),
    });
  }

  return (
    <form className="form-compra" onSubmit={confirmar}>
      <div className="form-compra__header">
        <div>
          <span className="form-compra__kicker">Novo item</span>
          <h2>O que está faltando?</h2>
        </div>
        <button
          type="button"
          className="form-compra__fechar"
          onClick={onCancelar}
          aria-label="Fechar formulário"
        >
          ×
        </button>
      </div>

      <label className="form-compra__campo form-compra__campo--nome">
        <span>Produto</span>
        <input
          autoFocus
          required
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Ex.: café"
        />
      </label>

      <div className="form-compra__linha">
        <label className="form-compra__campo">
          <span>Valor</span>
          <div className="form-compra__valor">
            <span>R$</span>
            <input
              required
              type="number"
              min="0"
              step="0.01"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
              placeholder="0,00"
            />
          </div>
        </label>

        <label className="form-compra__campo">
          <span>Quantidade</span>
          <input
            required
            type="number"
            min="1"
            step="1"
            value={quantidade}
            onChange={(event) => setQuantidade(event.target.value)}
            placeholder="1"
          />
        </label>
      </div>

      <div className="form-compra__acoes">
        <button
          type="button"
          className="form-compra__cancelar"
          onClick={onCancelar}
        >
          Cancelar
        </button>
        <button type="submit" className="form-compra__salvar">
          Adicionar à lista
        </button>
      </div>
    </form>
  );
}

export default FormularioCompra;

import { useState } from "react";
import FormularioCompra from "../formularioCompra/FormularioCompra";
import "./addCompras.css";

function AddCompras({ onAdicionar }) {
  const [aberto, setAberto] = useState(false);

  if (aberto) {
    return (
      <FormularioCompra
        onSalvar={(dados) => {
          onAdicionar(dados);
          setAberto(false);
        }}
        onCancelar={() => setAberto(false)}
      />
    );
  }
  return (
    <button
      type="button"
      className="botao-adicionar"
      onClick={() => setAberto(true)}
    >
      <span aria-hidden="true">+</span>
      Adicionar item
    </button>
  );
}

export default AddCompras;

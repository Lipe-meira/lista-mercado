import { Trash2 } from "lucide-react";
import "./Compras.css";

function Compras({ compras, jaComprado, deletarCompras }) {
  return (
    <div className="lista-compras">
      {compras.length === 0 && (
        <p className="lista-vazia">Sua lista está vazia. Adicione um item ✨</p>
      )}

      {compras.map((compra) => (
        <div key={compra.id} className="item-compra">
          <button
            type="button"
            aria-pressed={compra.comprado}
            onClick={() => jaComprado(compra.id)}
            className={`card-compra ${compra.comprado ? "card-compra--concluida" : ""}`}
          >
            <span className="check-compra" aria-hidden="true">
              {compra.comprado ? "✓" : ""}
            </span>

            <span className="info-compra">
              <strong>{compra.nome}</strong>
              <small>Quantidade: {compra.quantidade}</small>
            </span>

            <span className="valor-compra">
              {compra.valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </button>

          <button
            type="button"
            onClick={() => deletarCompras(compra.id)}
            className="botao-deletar"
            aria-label={`Excluir ${compra.nome}`}
            title={`Excluir ${compra.nome}`}
          >
            <Trash2 size={19} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Compras;

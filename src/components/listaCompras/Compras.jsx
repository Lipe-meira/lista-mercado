import "./Compras.css";

function Compras({ compras, jaComprado }) {
  return (
    <div className="lista-compras">
      {compras.map((compra) => (
        <button
          key={compra.id}
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
      ))}
    </div>
  );
}

export default Compras;

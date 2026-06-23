import "./Compras.css";

function Compras(props) {
  return (
    <div className="lista-compras">
      {props.compras.map((compra) => (
        <div key={compra.id} className="card-compra">
          <button
            type="button"
            onClick={() => props.jaComprado(compra.id)}
            className="bg-slate-400 grow text-white p-2 rounded-md"
          >
            <span
              className={
                compra.comprado
                  ? "text-red-500 ml-2 line-through"
                  : "text-green-500 ml-2"
              }
            >
              {compra.nome}
            </span>
          </button>
          <p>{compra.valor}</p>
          <p>{compra.quantidade}</p>
        </div>
      ))}
    </div>
  );
}

export default Compras;

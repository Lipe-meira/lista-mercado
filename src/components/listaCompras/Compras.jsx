import "./Compras.css";

function Compras(props) {
  return (
    <div className="lista-compras">
      {props.compras.map((compra) => (
        <div key={compra.nome} className="card-compra">
          <p className="nome-compra">{compra.nome}</p>
          <p>{compra.valor}</p>
          <p>{compra.quantidade}</p>
        </div>
      ))}
    </div>
  );
}

export default Compras;

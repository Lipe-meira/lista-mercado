import { useState } from "react";
import "./App.css";
import Compras from "./components/listaCompras/Compras";
import AddCompras from "./components/adicionarCompras/AddCompras";

function App() {
  const [compras, setCompras] = useState([
    {
      id: 1,
      nome: "leite",
      valor: 2.99,
      comprado: false,
      quantidade: 5,
    },
    {
      id: 2,
      nome: "pão",
      valor: 5.99,
      comprado: false,
      quantidade: 5,
    },
    {
      id: 3,
      nome: "arroz",
      valor: 15.99,
      comprado: false,
      quantidade: 2,
    },
    {
      id: 4,
      nome: "feijão",
      valor: 10.99,
      comprado: false,
      quantidade: 1,
    },
    {
      id: 5,
      nome: "carne",
      valor: 29.99,
      quantidade: 5,
      comprado: false,
    },
    {
      id: 6,
      nome: "frango",
      valor: 19.99,
      quantidade: 5,
      comprado: false,
    },
  ]);

  function jaComprado(compraId) {
    setCompras((comprasAtuais) =>
      comprasAtuais.map((compra) =>
        compra.id === compraId
          ? { ...compra, comprado: !compra.comprado }
          : compra,
      ),
    );
  }

  function adicionarCompras(dados) {
    setCompras((comprasAtuais) => [
      ...comprasAtuais,
      {
        ...dados,
        id: crypto.randomUUID(),
        comprado: false,
      },
    ]);
  }

  const totalComprado = compras.filter((compra) => compra.comprado).length;
  const progresso = (totalComprado / compras.length) * 100;

  return (
    <main className="app-shell">
      <section className="app-card">
        <header className="app-header">
          <div>
            <p className="app-kicker">Mercado da semana</p>
            <h1>Lista de compras</h1>
          </div>
          <span
            className="app-counter"
            aria-label={`${totalComprado} itens comprados`}
          >
            {totalComprado}/{compras.length}
          </span>
        </header>

        <div className="progress" aria-hidden="true">
          <span style={{ width: `${progresso}%` }} />
        </div>
        <AddCompras onAdicionar={adicionarCompras} />
        <Compras compras={compras} jaComprado={jaComprado} />
      </section>
    </main>
  );
}

export default App;

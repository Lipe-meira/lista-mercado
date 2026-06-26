import { useState, useEffect } from "react";
import "./App.css";
import Compras from "./components/listaCompras/Compras";
import AddCompras from "./components/adicionarCompras/AddCompras";

function App() {
  const [compras, setCompras] = useState(() => {
    const savedCompras = localStorage.getItem("compras");

    if (!savedCompras) {
      return [];
    }

    try {
      return JSON.parse(savedCompras);
    } catch {
      return [];
    }
  });

  // useEffect: executa depois que o componente
  // renderiza e sempre que tasks mudar
  useEffect(() => {
    localStorage.setItem("compras", JSON.stringify(compras));
  }, [compras]);

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

  function deletarCompras(compraId) {
    setCompras((comprasAtuais) =>
      comprasAtuais.filter((compra) => compraId !== compra.id),
    );
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
        <Compras
          compras={compras}
          jaComprado={jaComprado}
          deletarCompras={deletarCompras}
        />
      </section>
    </main>
  );
}

export default App;

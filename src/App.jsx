import { useState } from "react";
import Compras from "./components/listaCompras/Compras";

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

  return (
    <div className="w-full min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-full max-w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Lista de compras
        </h1>
        <Compras compras={compras} jaComprado={jaComprado} />
      </div>
    </div>
  );
}

export default App;

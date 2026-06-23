import { useState } from "react";
import Compras from "./components/listaCompras/Compras";

function App() {
                  //implementar depois 
  const [compras, _setCompras] = useState([
      {
        nome: "leite",
        valor: 2.99,
        quantidade: 5,
      },
      {
        nome: "pão",
        valor: 5.99,
        quantidade: 5,
      },
      {
        nome: "arroz",
        valor: 15.99,
        quantidade: 2,
      },
      {
        nome: "feijão",
        valor: 10.99,
        quantidade: 1,
      },
      {
        nome: "carne",
        valor: 29.99,
        quantidade: 5,
      },
      {
        nome: "frango",
        valor: 19.99,
        quantidade: 5,
      },
    
  ]);

  return (
    <div className="w-full min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-full max-w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Lista de compras
        </h1>
        <Compras compras={compras} />
      </div>
    </div>
  );
}

export default App;

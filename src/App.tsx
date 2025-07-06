// App.tsx
import { useState } from "react";
import "./App.css";
import flecha from "./assets/flecha.png";
import Image from "./componentes/Image";
import Button from "./componentes/Button";

function App() {
  const [moneda1, setMoneda1] = useState<string>("defecto");
  const [moneda2, setMoneda2] = useState<string>("defecto");
  const [input, setInput] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);

  const calcularResultado = () => {
    if (moneda1 === "defecto" || moneda2 === "defecto") {
      alert("Ingrese una moneda");
    } else if (moneda1 === moneda2) {
      alert("Las monedas son iguales");
    } else {
      const conversiones: Record<string, number> = {
        "euro_dollar": 1.16,
        "euro_libra": 0.85,
        "euro_pesos": 1170,
        "euro_peseta": 166.386,
        "euro_yen": 155.17,
        "euro_franco": 0.98,
        "euro_yuan": 7.8,
        "euro_pesoMex": 19.3,
        "euro_real": 5.9,
        "dollar_euro": 0.86207,
        "dollar_libra": 0.73,
        "dollar_pesos": 1008,
        "dollar_peseta": 143.2,
        "dollar_yen": 133.6,
        "dollar_franco": 0.89,
        "dollar_yuan": 7.1,
        "dollar_pesoMex": 16.5,
        "dollar_real": 5.45,
        "libra_euro": 1.17647,
        "libra_dollar": 1.36986,
        "libra_pesos": 1380,
        "libra_peseta": 195,
        "libra_yen": 180.2,
        "libra_franco": 1.15,
        "libra_yuan": 9.5,
        "libra_pesoMex": 22.0,
        "libra_real": 6.8,
        "pesos_euro": 0.0008547,
        "pesos_dollar": 0.000992,
        "pesos_libra": 0.0007246,
        "pesos_peseta": 0.14,
        "pesos_yen": 0.15,
        "pesos_franco": 0.00083,
        "pesos_yuan": 0.0065,
        "pesos_pesoMex": 0.016,
        "pesos_real": 0.0051,
        "peseta_euro": 0.00601,
        "peseta_dollar": 0.00698,
        "peseta_libra": 0.00513,
        "peseta_pesos": 7.1428,
        "peseta_yen": 0.93,
        "peseta_franco": 0.0059,
        "peseta_yuan": 0.047,
        "peseta_pesoMex": 0.12,
        "peseta_real": 0.038,
        "yen_euro": 0.00644,
        "yen_dollar": 0.00749,
        "yen_libra": 0.00555,
        "yen_pesos": 6.6667,
        "yen_peseta": 1.0753,
        "yen_franco": 0.0063,
        "yen_yuan": 0.051,
        "yen_pesoMex": 0.13,
        "yen_real": 0.042,
        "franco_euro": 1.02,
        "franco_dollar": 1.12,
        "franco_libra": 0.87,
        "franco_pesos": 1204,
        "franco_peseta": 169.5,
        "franco_yen": 158.7,
        "franco_yuan": 8.1,
        "franco_pesoMex": 21.5,
        "franco_real": 6.4,
        "yuan_euro": 0.128,
        "yuan_dollar": 0.141,
        "yuan_libra": 0.105,
        "yuan_pesos": 154.0,
        "yuan_peseta": 21.3,
        "yuan_yen": 19.6,
        "yuan_franco": 0.123,
        "yuan_pesoMex": 2.65,
        "yuan_real": 0.79,
        "pesoMex_euro": 0.0518,
        "pesoMex_dollar": 0.0606,
        "pesoMex_libra": 0.0455,
        "pesoMex_pesos": 62.5,
        "pesoMex_peseta": 8.3,
        "pesoMex_yen": 7.75,
        "pesoMex_franco": 0.0465,
        "pesoMex_yuan": 0.377,
        "pesoMex_real": 0.30,
        "real_euro": 0.169,
        "real_dollar": 0.183,
        "real_libra": 0.147,
        "real_pesos": 196.0,
        "real_peseta": 26.5,
        "real_yen": 23.7,
        "real_franco": 0.157,
        "real_yuan": 1.27,
        "real_pesoMex": 3.33,
      };

      const key = `${moneda1}_${moneda2}`;
      const tasa = conversiones[key];

      if (tasa) {
        setResultado(Number((input * tasa).toFixed(2)));
      } else {
        alert("Conversión no disponible");
      }
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold text-green-400 mb-10 tracking-wide">
        NOOB CONVERTER
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
          <select
            value={moneda1}
            onChange={(e) => setMoneda1(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded-lg"
          >
            <option value="defecto">Seleccione una moneda</option>
            <option value="euro">Euro</option>
            <option value="dollar">Dólar</option>
            <option value="libra">Libra</option>
            <option value="pesos">Pesos argentino</option>
            <option value="pesoMex">Peso mexicano</option>
            <option value="yen">Yen</option>
            <option value="franco">Franco suizo</option>
            <option value="yuan">Yuan chino</option>
            <option value="real">Real brasileño</option>
            <option value="peseta">Peseta</option>
          </select>
        </div>

        <div className="flex gap-4 items-center">
          <Button onClick={calcularResultado}>Convertir</Button>
          <Image src={flecha} width={40} height={40} alt="flecha" />
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
          <select
            value={moneda2}
            onChange={(e) => setMoneda2(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded-lg"
          >
            <option value="defecto">Seleccione una moneda</option>
            <option value="euro">Euro</option>
            <option value="dollar">Dólar</option>
            <option value="libra">Libra</option>
            <option value="pesos">Pesos argentino</option>
            <option value="pesoMex">Peso mexicano</option>           
            <option value="yen">Yen</option>
            <option value="franco">Franco suizo</option>
            <option value="yuan">Yuan chino</option>
            <option value="real">Real brasileño</option>
            <option value="peseta">Peseta</option>
          </select>
        </div>
      </div>

      <div className="mt-10 w-full max-w-sm">
        <input
          onChange={(e) => setInput(Number(e.target.value))}
          className="w-full bg-gray-100 text-black p-3 rounded-lg text-center"
          placeholder="Ingrese el monto"
          type="number"
        />
      </div>

      <div className="mt-8 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg">
        <h1 className="text-xl font-semibold">
          Resultado: {resultado !== 0 ? resultado : "—"}
        </h1>
      </div>
    </div>
  );
}

export default App;

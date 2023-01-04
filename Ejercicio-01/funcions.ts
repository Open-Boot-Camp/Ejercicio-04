import { Coches } from "./Coche";

const aditions = (a: number, b: number, c: number): number => a + b + c;

const main = () => {
  let resultado = aditions(2, 4, 5);
  console.log(resultado);

  const miCoche = new Coches();
  let numberPort = miCoche.incrementNumberPort();
  console.log(`El numero de puertas es ${numberPort}`);
};

main();

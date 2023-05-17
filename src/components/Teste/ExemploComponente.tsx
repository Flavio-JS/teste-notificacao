import React from "react";

interface IExemploComponenteProps {
  mostrar: boolean;
}

const ExemploComponente = ({ mostrar }: IExemploComponenteProps) => {
  return (
    <div>{mostrar && <p>Condição atendida, exibindo o parágrafo!</p>}</div>
  );
};

export { ExemploComponente };

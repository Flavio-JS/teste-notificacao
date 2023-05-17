import React from "react";
import { render, screen } from "@testing-library/react";
import { ExemploComponente } from "./ExemploComponente";
import "@testing-library/jest-dom";

describe("ExemploComponente", () => {
  it("deve renderizar corretamente quando a prop 'mostrar' for verdadeira", () => {
    render(<ExemploComponente mostrar={true} />);

    expect(
      screen.queryByText("Condição atendida, exibindo o parágrafo!")
    ).toBeInTheDocument();
  });

  it("não deve renderizar o parágrafo quando a prop 'mostrar' for falsa", () => {
    render(<ExemploComponente mostrar={false} />);

    expect(
      screen.queryByText("Condição atendida, exibindo o parágrafo!")
    ).toBeNull();
  });
});

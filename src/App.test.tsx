import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without error", () => {
  render(<App />);
  const farmlandElement = screen.getByText(/farmland/i);
  expect(farmlandElement).toBeInTheDocument();
});

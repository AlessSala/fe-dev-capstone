import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router';
import HomePage from "./HomePage";

describe("The home page", () => {
  test("shows the CallToAction, Specials, CustomersSay, and AboutUs components", () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("CallToAction")).toBeInTheDocument();
    expect(screen.getByTestId("Specials")).toBeInTheDocument();
    expect(screen.getByTestId("CustomersSay")).toBeInTheDocument();
    expect(screen.getByTestId("AboutUs")).toBeInTheDocument();
  });
});

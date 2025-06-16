import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router';
import ConfirmationPage from "./ConfirmationPage";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useLocation: () => ({
    state: {
      firstName: 'Tom',
      lastName: 'Appleseed',
      date: '1999-9-9',
      time: '19.59'
    }
  })
}));

describe("The confirmation page", () => {
    beforeEach(() => jest.clearAllMocks());
  test("shows a little summary", () => {
    render(<ConfirmationPage />, { wrapper: BrowserRouter });
    expect(screen.getByText("Dear Tom Appleseed, we will welcome you at 1999-9-9, 19.59.")).toBeInTheDocument();
  });
});

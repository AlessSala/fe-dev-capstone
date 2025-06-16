import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router";
import { submitAPI } from "utils/api";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));
jest.mock("utils/api", () => ({
  submitAPI: jest.fn(),
}));

describe("BookingForm", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const updateTimes = jest.fn();
  const navigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigate.mockReturnValue(navigate);
  });

  test("renders all form fields with initial values", () => {
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />);
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Make Your reservation/i })).toBeInTheDocument();
  });

  test("updates form fields on user input", () => {
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />);
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/Contact Number/i), { target: { value: "123-456-7890" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });
    expect(screen.getByLabelText(/First Name/i)).toHaveValue("John");
    expect(screen.getByLabelText(/Last Name/i)).toHaveValue("Doe");
    expect(screen.getByLabelText(/Contact Number/i)).toHaveValue("123-456-7890");
    expect(screen.getByLabelText(/Number of guests/i)).toHaveValue(4);
    expect(screen.getByLabelText(/Occasion/i)).toHaveValue("Birthday");
  });

  test("calls updateTimes on date change", () => {
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />);
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: "2024-12-31" } });
    expect(updateTimes).toHaveBeenCalledWith(expect.objectContaining({ type: expect.any(String), payload: "2024-12-31" }));
  });

  test("submits form and navigates on successful API call", () => {
    submitAPI.mockReturnValue(true);
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />);
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "Jane" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Smith" } });
    fireEvent.change(screen.getByLabelText(/Contact Number/i), { target: { value: "111-222-3333" } });
    fireEvent.click(screen.getByRole("button", { name: /Make Your reservation/i }));
    expect(submitAPI).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith("/confirmation", expect.any(Object));
  });

  test("does not navigate if API call fails", () => {
    submitAPI.mockReturnValue(false);
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />);
    fireEvent.click(screen.getByRole("button", { name: /Make Your reservation/i }));
    expect(submitAPI).toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });
});

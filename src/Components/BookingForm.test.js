import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Booking from "./BookingPage";
import { submitAPI } from "../mocks/api";

// Mock the API function
jest.mock("../mocks/api", () => ({
  submitAPI: jest.fn(),
}));

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Booking Form Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks before each test
  });

  test("renders the form with all fields", () => {
    renderWithRouter(<Booking />);
    expect(screen.getByText("Book a Table")).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Make Your Reservation/i })).toBeInTheDocument();
  });

  test("displays validation errors if form is submitted with missing fields", async () => {
    renderWithRouter(<Booking />);

    fireEvent.click(screen.getByRole("button", { name: /Make Your Reservation/i }));

    expect(await screen.findByText("Please select a time.")).toBeInTheDocument();
  });

  test("displays error if guests are out of range", async () => {
    renderWithRouter(<Booking />);

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "12" } });

    fireEvent.click(screen.getByRole("button", { name: /Make Your Reservation/i }));

    expect(await screen.findByText("Guests must be between 1 and 10.")).toBeInTheDocument();
  });

  test("submits the form successfully when valid data is entered", async () => {
    submitAPI.mockResolvedValue(true); // Mock successful API response

    renderWithRouter(<Booking />);

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-03-10" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    fireEvent.click(screen.getByRole("button", { name: /Make Your Reservation/i }));

    expect(submitAPI).toHaveBeenCalledWith({
      date: "2025-03-10",
      time: "18:00",
      guests: 4,
      occasion: "Birthday",
    });
  });

  test("shows alert if API call fails", async () => {
    submitAPI.mockResolvedValue(false); // Mock API failure

    renderWithRouter(<Booking />);

    window.alert = jest.fn(); // Mock window.alert

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-03-10" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    fireEvent.click(screen.getByRole("button", { name: /Make Your Reservation/i }));

    expect(window.alert).toHaveBeenCalledWith("Booking failed. Please try again.");
  });
});

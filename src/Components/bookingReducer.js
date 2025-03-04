import { fetchAPI } from "../mocks/api"; // Assuming the API is globally available

export const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date
  return fetchAPI(today) || []; // Fetch available times for today
};

export const updateTimes = (state, action) => {
  return fetchAPI(action.date) || state; // Fetch times for selected date
};

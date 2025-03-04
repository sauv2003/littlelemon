import { initializeTimes, updateTimes } from "./bookingReducer"; // Import your reducer functions

test("initializeTimes returns correct initial values", () => {
    const times = initializeTimes();
    expect(times).toContain("17:00");
    expect(times).toContain("18:00");
    expect(times.length).toBeGreaterThan(0);
});

test("updateTimes should return the same state when no changes are applied", () => {
    const state = ["17:00", "18:00", "19:00"];
    const newState = updateTimes(state, { type: "NO_ACTION" }); // Assuming you pass an action
    expect(newState).toEqual(state);
});

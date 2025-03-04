# Little Lemon Restaurant Booking App

## 📌 Project Overview
This is a **restaurant table reservation system** for **Little Lemon**. Users can select a date, time, number of guests, and occasion to make a reservation. The app validates the form, connects to an API, and confirms the booking upon successful submission.

## 🚀 Features
- **Dynamic Booking Form** with real-time available time slots.
- **Form Validation** for required fields and guest limits.
- **API Integration** for fetching available times and submitting reservations.
- **Booking Confirmation Page** to show success message after a reservation.
- **Unit Tests** for form validation and API integration.

---

## 🛠️ Tech Stack
- **React** (Frontend UI)
- **React Router** (Navigation)
- **Jest & React Testing Library** (Unit Testing)
- **Mock API** (Fetching and submitting booking data)

---

## 📂 Folder Structure
```
📦 src
 ┣ 📂 Components
 ┃ ┣ 📜 Booking.js         # Booking Form Component
 ┃ ┣ 📜 ConfirmedBooking.js # Booking Confirmation Page
 ┃ ┗ 📜 bookingReducer.js  # Reducer for managing available times
 ┣ 📂 mocks
 ┃ ┗ 📜 api.js             # Mock API functions
 ┣ 📜 App.js                # Main Application Component
 ┣ 📜 index.js              # Entry Point
 ┗ 📜 App.css               # Styles
```

---

## 🎯 How to Run the Project
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/little-lemon-booking.git
cd little-lemon-booking
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```
_The app will run on `http://localhost:3000/`._

---

## 🧪 Running Tests
To run unit tests, use:
```sh
npm test
```

---

## 🎨 Form Validation Rules
- **Date**: Must be selected.
- **Time**: Must be selected.
- **Guests**: Must be between **1 and 10**.
- **Occasion**: Defaults to **Birthday** but can be changed.

---

## 🔗 API Functions
| Function | Description |
|----------|------------|
| `fetchAPI(date)` | Returns available time slots for the given date. |
| `submitAPI(formData)` | Submits the form and returns `true` if successful. |

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 👨‍💻 Author
Developed by **Saurabh**. 🚀 Feel free to contribute!


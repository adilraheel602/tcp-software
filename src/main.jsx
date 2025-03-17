import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming App.js or App.jsx exists
import "./App.css"; // ✅ This is the correct way to import CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

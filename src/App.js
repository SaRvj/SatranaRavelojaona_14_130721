import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CreateEmployee />} />
      </Routes>
    </Router>
  );
}
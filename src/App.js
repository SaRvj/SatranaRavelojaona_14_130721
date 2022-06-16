import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

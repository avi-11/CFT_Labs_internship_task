import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/main.css";
import "./App.css";
import Modern from "./components/modern";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Modern />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

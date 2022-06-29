import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// componets
import Home from "./components/Home";
import Information from "./components/Information";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:type/:number" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

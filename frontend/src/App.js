import "./App.css";
import Nav from "./container/components/Nav";
import Magasin from "./container/magasin/Magasin";
import LoginPage from "./container/login/Login";
import Facture from "./container/components/Facture";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/magasin" element={<Magasin />} />
          <Route path="/facture/:id" element={<Facture />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route  } from "react-router-dom"
import './App.css';
import Navbar from './views/Navbar';
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter >
    <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

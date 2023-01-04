import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;

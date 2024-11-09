import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import RequestPasswordReset from "./pages/RequestPasswordReset";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request-pass-reset" element={<RequestPasswordReset/>} />
        <Route path="/reset-pass" element={<ResetPassword/>} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
  );
}

export default App;

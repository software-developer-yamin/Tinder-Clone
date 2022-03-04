import { Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Home from './pages/Home';
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}

export default App;

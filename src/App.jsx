import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import RiskAnalysis from "./components/RiskAnalysis";

const App = () => (
  <Router>
    <Navbar />
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analysis" element={<RiskAnalysis />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;

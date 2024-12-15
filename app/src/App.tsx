import React from "react";
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Privacy from "./pages/Home/PrivacyTerms/Privacy";
import Terms from "./pages/Home/PrivacyTerms/Terms";
import FAQ from "./pages/Home/FAQ/FAQ";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import CreateMemory from "./pages/CreateMemory/CreateMemory";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/create-memory" element={<CreateMemory />} /> */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

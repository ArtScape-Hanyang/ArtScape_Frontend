import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./routes/home";
import MatchingPage from "./pages/MatchingPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matching" element={<MatchingPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

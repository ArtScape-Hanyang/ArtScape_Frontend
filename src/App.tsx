import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import MatchingPage from "./pages/MatchingPage";
import MatchTypePage from "./pages/MatchTypePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matching" element={<MatchingPage />} />
          <Route path="/matching/type" element={<MatchTypePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;

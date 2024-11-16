import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/home";

import MatchTypePage from "./pages/MatchTypePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/matching/type" element={<MatchTypePage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

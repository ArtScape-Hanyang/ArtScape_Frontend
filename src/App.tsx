import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import MatchTypePage from "./pages/MatchTypePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MatchPersonnel from "./pages/MatchPersonnel";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/matching/type" element={<MatchTypePage />}></Route>
          <Route path="/matching/personnel" element={<MatchPersonnel />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

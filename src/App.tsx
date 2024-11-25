import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Matching from "./pages/Matching";
import MatchTypePage from "./pages/MatchTypePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MatchPersonnel from "./pages/MatchPersonnel";
import MatchLocation from "./pages/MatchLocation";
import MatchForm from "./pages/MatchForm";
import MatchMystyle from "./pages/MatchMystyle";
import MatchWtstyle from "./pages/MatchWtstyle";
import MatchMchlist from "./pages/MatchMchlist";
import ProfilePage from "./pages/ProfilePage";
import MapPage from "./pages/MapPage";
import PlanMain from "./pages/PlanMain";
import PlanInfo from "./pages/PlanInfo";
import PlanNote from "./pages/PlanNote";
import ArtRegiPage from "./pages/ArtRegiPage";
import ArtRegiDetailPage from "./pages/ArtRegiDetailPage";
import ArtRegiBugetPage from "./pages/ArtRegiBugetPage";
import EditBudgetPage from "./pages/EditBudgetPage";
import { BudgetProvider } from "./layout/BudgetContext";

const App: React.FC = () => {
  return (
    <Router>
      <BudgetProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/matching/type" element={<MatchTypePage />} />
          <Route path="/matching/personnel" element={<MatchPersonnel />} />
          <Route path="/matching/location" element={<MatchLocation />} />
          <Route path="/matching/form" element={<MatchForm />} />
          <Route path="/matching/mystyle" element={<MatchMystyle />} />
          <Route path="/matching/wtstyle" element={<MatchWtstyle />} />
          <Route path="/matching/mchlist" element={<MatchMchlist />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/multi_pln" element={<PlanMain />} />
          <Route path="/multi_pln/entry/defalut" element={<ArtRegiPage />} />
          <Route
            path="/multi_pln/entryedit/defalut"
            element={<ArtRegiDetailPage />}
          />
          <Route path="/multi_pln/budget" element={<ArtRegiBugetPage />} />
          <Route path="/multi_pln/budget/edit" element={<EditBudgetPage />} />
          <Route path="/multi_pln/info" element={<PlanInfo />} />
          <Route path="/multi_pln/note" element={<PlanNote />} />
        </Routes>
      </BudgetProvider>
    </Router>
  );
};

export default App;

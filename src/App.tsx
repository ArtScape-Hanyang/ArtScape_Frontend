import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

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
import PlanDate from "./pages/PlanDate";
import ArtRegiPage from "./pages/ArtRegiPage";
import ArtRegiDetailPage from "./pages/ArtRegiDetailPage";
import ArtRegiBugetPage from "./pages/ArtRegiBugetPage";
import EditBudgetPage from "./pages/EditBudgetPage";
import { BudgetProvider } from "./layout/BudgetContext";
import MainPage from "./pages/MainPage";
import { auth } from "../src/routes/firebase";
import GlobalStyle from "./styles/GlobalStyle";
import PlanDetail from "./pages/PlanDetail";
import PlanListPage from "./pages/PlanListPage";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe(); // 컴포넌트가 언마운트될 때 리스너 해제
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 화면
  }

  return (
    <Router>
      <GlobalStyle />
      <BudgetProvider>
        <Routes>
          {/* 인증 상태에 따라 라우팅 분기 */}
          <Route
            path="/"
            element={user ? <MainPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignupPage />}
          />
          {/* 아래는 보호된 경로 */}
          <Route
            path="/matching"
            element={user ? <Matching /> : <Navigate to="/login" />}
          />
          <Route
            path="/matching/type"
            element={user ? <MatchTypePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/matching/personnel"
            element={user ? <MatchPersonnel /> : <Navigate to="/login" />}
          />
          <Route
            path="/matching/location"
            element={user ? <MatchLocation /> : <Navigate to="/login" />}
          />
          <Route
            path="/matching/form"
            element={user ? <MatchForm /> : <Navigate to="/login" />}
          />
          <Route
            path="/matching/mystyle"
            element={user ? <MatchMystyle /> : <Navigate to="/login" />}
          />
          <Route
            path="/matching/wtstyle"
            element={user ? <MatchWtstyle /> : <Navigate to="/login" />}
          />
          <Route
            path="/matching/mchlist"
            element={user ? <MatchMchlist /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={user ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/multi_pln/map"
            element={user ? <MapPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/multi_pln"
            element={user ? <PlanMain /> : <Navigate to="/login" />}
          />
          <Route
            path="/multi_pln/entry/defalut"
            element={user ? <ArtRegiPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/multi_pln/entryedit/defalut"
            element={user ? <ArtRegiDetailPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/multi_pln/budget"
            element={user ? <ArtRegiBugetPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/multi_pln/budget/edit"
            element={user ? <EditBudgetPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/multi_pln/info"
            element={user ? <PlanInfo /> : <Navigate to="/login" />}
          />
          <Route
            path="/multi_pln/note"
            element={user ? <PlanNote /> : <Navigate to="/login" />}
          />
          <Route
            path="/multi_pln/Exhidate"
            element={user ? <PlanDate /> : <Navigate to="/login" />}
          />
          <Route
            path="/plandetail/:id"
            element={user ? <PlanDetail /> : <Navigate to="/login" />}
          />
          <Route
            path="/explore"
            element={user ? <PlanListPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </BudgetProvider>
    </Router>
  );
};

export default App;

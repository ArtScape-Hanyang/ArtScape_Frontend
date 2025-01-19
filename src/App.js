import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
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
const App = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => unsubscribe(); // 컴포넌트가 언마운트될 때 리스너 해제
    }, []);
    if (isLoading) {
        return _jsx("div", { children: "Loading..." }); // 로딩 화면
    }
    return (_jsxs(Router, { children: [_jsx(GlobalStyle, {}), _jsx(BudgetProvider, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: user ? _jsx(MainPage, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/login", element: user ? _jsx(Navigate, { to: "/" }) : _jsx(LoginPage, {}) }), _jsx(Route, { path: "/signup", element: user ? _jsx(Navigate, { to: "/" }) : _jsx(SignupPage, {}) }), _jsx(Route, { path: "/matching", element: user ? _jsx(Matching, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/matching/type", element: user ? _jsx(MatchTypePage, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/matching/personnel", element: user ? _jsx(MatchPersonnel, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/matching/location", element: user ? _jsx(MatchLocation, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/matching/form", element: user ? _jsx(MatchForm, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/matching/mystyle", element: user ? _jsx(MatchMystyle, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/matching/wtstyle", element: user ? _jsx(MatchWtstyle, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/matching/mchlist", element: user ? _jsx(MatchMchlist, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/profile", element: user ? _jsx(ProfilePage, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/multi_pln/map", element: user ? _jsx(MapPage, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/multi_pln", element: user ? _jsx(PlanMain, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/multi_pln/entry/defalut", element: user ? _jsx(ArtRegiPage, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/multi_pln/entryedit/defalut", element: user ? _jsx(ArtRegiDetailPage, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/multi_pln/budget", element: user ? _jsx(ArtRegiBugetPage, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/multi_pln/budget/edit", element: user ? _jsx(EditBudgetPage, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/multi_pln/info", element: user ? _jsx(PlanInfo, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/multi_pln/note", element: user ? _jsx(PlanNote, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/multi_pln/Exhidate", element: user ? _jsx(PlanDate, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/plandetail/:id", element: user ? _jsx(PlanDetail, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/explore", element: user ? _jsx(PlanListPage, {}) : _jsx(Navigate, { to: "/login" }) })] }) })] }));
};
export default App;

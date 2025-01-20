import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import HomeIcon from "../asset/home-icon.svg";
import WebIcon from "../asset/webicon.svg";
import StarIcon from "../asset/icon2.svg";
import CTIcon from "../asset/icon3.svg";
import ABIcon from "../asset/icon4.svg";
import { signOut } from "firebase/auth"; // Firebase 로그아웃 메서드
import { auth } from "../routes/firebase"; // Firebase 설정 파일
import { useNavigate } from "react-router-dom"; // 페이지 이동
const Navbar = () => {
    const navigate = useNavigate();
    const handleServiceClick = () => {
        navigate("/matching");
    };
    const handleContacteClick = () => {
        navigate("/multi_pln");
    };
    const handleHomeClick = () => {
        navigate("/");
    };
    const handleExporeClick = () => {
        navigate("/explore");
    };
    const handleLogout = async () => {
        try {
            await signOut(auth); // Firebase 로그아웃
            alert("로그아웃 되었습니다.");
            navigate("/login"); // 로그인 페이지로 이동
        }
        catch (error) {
            console.error("Logout error:", error);
            alert("로그아웃 중 문제가 발생했습니다. 다시 시도해주세요.");
        }
    };
    return (_jsx(NavbarContainer, { children: _jsxs(NavLinks, { children: [_jsx(NavLink, { as: "button", onClick: handleHomeClick, children: _jsx(NavIcon, { src: HomeIcon, alt: "Home" }) }), _jsx(NavLink, { as: "button", onClick: handleExporeClick, children: _jsx(NavIcon, { src: WebIcon, alt: "Explore" }) }), _jsx(NavLink, { as: "button", onClick: handleServiceClick, children: _jsx(NavIcon, { src: StarIcon, alt: "Services" }) }), _jsx(NavLink, { as: "button", onClick: handleContacteClick, children: _jsx(NavIcon, { src: CTIcon, alt: "Contact" }) }), _jsx(NavLink, { as: "button", onClick: handleLogout, children: _jsx(NavIcon, { src: ABIcon, alt: "Logout" }) })] }) }));
};
const NavbarContainer = styled.nav `
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  display: flex;
  width: 22.125rem;
  padding: 0.75rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
  background: var(--primary-White, #fafbfb);
  box-shadow: 0px -2px 8px rgba(34, 34, 34, 0.2);
`;
const NavLinks = styled.div `
  display: flex;
  gap: 1.5rem;
`;
const NavLink = styled.a `
  text-decoration: none;
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer; /* 클릭 가능한 스타일 */

  &:hover {
    border-radius: 6.25rem;
    background: #d2efee;
  }
`;
const NavIcon = styled.img `
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export default Navbar;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../routes/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        // localStorage에서 이메일 가져오기
        const savedEmail = localStorage.getItem("rememberedEmail");
        if (savedEmail) {
            setFormData((prev) => ({ ...prev, email: savedEmail }));
            setRememberMe(true);
        }
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        try {
            // Firebase 로그인
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Remember Me: 이메일 저장 또는 제거
            if (rememberMe) {
                localStorage.setItem("rememberedEmail", email);
            }
            else {
                localStorage.removeItem("rememberedEmail");
            }
            // 로그인 성공 시 처리
            console.log("로그인 성공:", user);
            alert("환영합니다!");
            navigate("/matching");
        }
        catch (err) {
            if (err instanceof FirebaseError) {
                // Firebase 오류 처리
                const firebaseErrorMessages = {
                    "auth/invalid-email": "유효하지 않은 이메일 형식입니다.",
                    "auth/user-disabled": "이 계정은 비활성화되었습니다.",
                    "auth/user-not-found": "등록되지 않은 사용자입니다.",
                    "auth/wrong-password": "비밀번호가 올바르지 않습니다.",
                    "auth/too-many-requests": "로그인 시도가 너무 많아 계정이 잠겼습니다. 잠시 후 다시 시도해주세요.",
                };
                const errorMessage = firebaseErrorMessages[err.code] ||
                    "로그인 중 문제가 발생했습니다. 다시 시도해주세요.";
                console.error("Firebase Error:", err.message);
                setErrorMessage(errorMessage);
            }
        }
    };
    return (_jsx(LoginContainer, { children: _jsxs(StyledForm, { onSubmit: handleSubmit, children: [_jsx(Label, { htmlFor: "email", children: "\uC774\uBA54\uC77C \uC785\uB825" }), _jsx(Input, { type: "email", id: "email", name: "email", placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694", value: formData.email, onChange: handleInputChange, required: true, autoComplete: "username" }), _jsx(Label, { htmlFor: "password", children: "\uD328\uC2A4\uC6CC\uB4DC \uC785\uB825" }), _jsx(Input, { type: "password", id: "password", name: "password", placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694", value: formData.password, onChange: handleInputChange, required: true, autoComplete: "current-password" }), _jsxs(CheckboxContainer, { children: [_jsx(Checkbox, { type: "checkbox", id: "rememberMe", name: "rememberMe", checked: rememberMe, onChange: handleCheckboxChange }), _jsx(AutoLogin, { children: "\uC790\uB3D9 \uB85C\uADF8\uC778" }), _jsx(SignupLink, { to: "/signup", children: "\uD68C\uC6D0\uAC00\uC785" })] }), errorMessage && _jsx(ErrorMessage, { children: errorMessage }), _jsx(Button, { type: "submit", children: "\uB85C\uADF8\uC778" })] }) }));
};
const LoginContainer = styled.div `
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  top: 14rem;
  justify-content: center;
  width: 100%;
`;
const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  width: 22.125rem;
`;
const Label = styled.label `
  justify-content: left;
  display: block;
  margin-bottom: 0.5rem;
  text-align: left;
  font-family: Pretendard, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--Gray-Scale-Black, #17171b);
`;
const Input = styled.input `
  margin-bottom: 1.25rem;
  border: 1px solid #ddd;
  height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--Gray-Scale-G100, #e7e7ee);
`;
const Button = styled.button `
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: var(--primary-G500, #52c1bf);
  height: 4rem;
  color: #fafbfb;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem;

  &:hover {
    background-color: #aeaeae;
  }
`;
const CheckboxContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 1rem;
  margin-bottom: 2.38rem;
`;
const Checkbox = styled.input `
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--Gray-Scale-Black, #17171b);
`;
const SignupLink = styled(Link) `
  color: var(--primary-G500, #52c1bf);
  text-align: right;
  margin-left: 12rem;

  text-align: left;
  font-family: Pretendard, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`;
const AutoLogin = styled.p `
  justify-content: left;
  display: block;

  text-align: left;
  font-family: Pretendard, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--Gray-Scale-Black, #17171b);
`;
const ErrorMessage = styled.p `
  color: red;
  font-size: 0.875rem;
  margin-top: -1rem;
  margin-bottom: 1rem;
  text-align: center;
`;
export default LoginForm;

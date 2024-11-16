import React, { useState } from "react";
import styled from "styled-components";
import CameraIcon from "../asset/camera.svg";

const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  top: 4rem;
  justify-content: center;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 22.125rem;
`;

const Label = styled.label`
  justify-content: left;
  display: block;
  margin-bottom: 0.5rem;
  text-align: left;
  color: var(--Gray-Scale-Black, #17171b);

  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.875rem;
  letter-spacing: -0.02188rem;

  span {
    color: red;
    margin-left: 0.25rem;
    font-size: 1rem;
  }
`;

const Input = styled.input`
  margin-bottom: 1.25rem;
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--Gray-Scale-G100, #e7e7ee);
`;

const Button = styled.button`
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

  margin-top: 3.5rem;

  &:hover {
    background-color: #aeaeae;
  }
`;

const ImagePreviewWrapper = styled.label`
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 1.5rem auto;
  background-color: #e0e0e0;
  border: 2px solid var(--primary-G500, #52c1bf);
  overflow: hidden;
  cursor: pointer;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 영역에 꽉 차게 조정 */
  object-position: center; /* 이미지의 중심을 맞추어 표시 */
  display: block; /* 이미지가 인라인 요소로 처리되지 않도록 */
`;

const PlaceholderIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const FileInput = styled.input`
  display: none;
`;

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword || !profileImage) {
      alert("모든 필드를 입력하고 프로필 사진을 업로드해주세요.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const signupData = new FormData();
    signupData.append("name", name);
    signupData.append("email", email);
    signupData.append("password", password);
    signupData.append("profileImage", profileImage);

    console.log("Signup Data:", signupData);

    alert("회원가입이 완료되었습니다!");
  };

  return (
    <SignupContainer>
      <StyledForm onSubmit={handleSubmit}>
        <ImagePreviewWrapper htmlFor="file-input">
          {imagePreview ? (
            <ImagePreview src={imagePreview} alt="Profile Preview" />
          ) : (
            <PlaceholderIcon src={CameraIcon} alt="Camera Icon" />
          )}
        </ImagePreviewWrapper>
        <FileInput
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <Label htmlFor="name">
          이름 입력 <span>*</span>
        </Label>
        <Input
          type="text"
          name="name"
          placeholder="이름 입력"
          value={formData.name}
          onChange={handleChange}
        />

        <Label htmlFor="email">
          이메일 입력 <span>*</span>
        </Label>
        <Input
          type="email"
          name="email"
          placeholder="이메일 입력"
          value={formData.email}
          onChange={handleChange}
        />

        <Label htmlFor="password">
          비밀번호 입력 <span>*</span>
        </Label>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          value={formData.password}
          onChange={handleChange}
        />

        <Label htmlFor="confirmPassword">
          비밀번호 확인 <span>*</span>
        </Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">회원가입</Button>
      </StyledForm>
    </SignupContainer>
  );
};

export default SignupForm;

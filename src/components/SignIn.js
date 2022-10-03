// 리액트로 API(http://ec2-3-38-135-202.ap-northeast-2.compute.amazonaws.com:8000), JWT 사용하여 로그인 구현하기
// 1. 로그인 페이지 구현하기
// 2. 로그인 후 토큰 저장하기
// 3. 로그인 후 토큰을 이용하여 API 요청하기
// 4. 로그아웃 구현하기

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    input {
      width: 20rem;
      height: 2rem;
      margin-bottom: 1rem;
    }
    button {
      width: 20rem;
      height: 2rem;
    }
  }
  div {
    span {
      cursor: pointer;
      color: rgb(88, 167, 255);
    }
  }
`;

function SignIn({ setIsSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://ec2-3-38-135-202.ap-northeast-2.compute.amazonaws.com:8000/auth/signin",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { access_token } = response.data;
    localStorage.setItem("access_token", access_token);
    access_token ? navigate("/todo") : navigate("/");
  };

  const onEmailChange = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
    if (value.split("").includes("@")) {
      setValidEmail(true);
    }
  };

  const onPasswordChange = (e) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
    if (value.length >= 8) {
      setValidPassword(true);
    }
  };

  return (
    <Wrapper>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onPasswordChange}
          minLength="8"
        />
        <button disabled={!validEmail || !validPassword} type="submit">
          로그인
        </button>
      </form>
      <div>
        아직 계정이 없으신가요?{" "}
        <span onClick={() => setIsSignIn(false)}>회원가입</span>
      </div>
    </Wrapper>
  );
}

export default SignIn;

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

function SignUp({ setIsSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://ec2-3-38-135-202.ap-northeast-2.compute.amazonaws.com:8000/auth/signup",
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

  return (
    <Wrapper>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="8"
        />
        <button type="submit">회원가입</button>
      </form>
      <div>
        이미 계정이 있으신가요?{" "}
        <span onClick={() => setIsSignIn(true)}>로그인</span>
      </div>
    </Wrapper>
  );
}

export default SignUp;

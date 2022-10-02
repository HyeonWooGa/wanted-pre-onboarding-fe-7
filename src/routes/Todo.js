import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateTodo from "../components/CreateTodo";
import GetTodos from "../components/GetTodos";
import { useState } from "react";

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
  ul {
    li {
      margin-bottom: 1rem;
    }
  }
`;

function Todo({ token }) {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  if (!token) navigate("/");
  return (
    <>
      <Wrapper>
        <h1>Todo</h1>
        <CreateTodo todos={todos} setTodos={setTodos} token={token} />
        <GetTodos todos={todos} setTodos={setTodos} token={token} />
      </Wrapper>
    </>
  );
}

export default Todo;

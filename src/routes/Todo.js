import { useNavigate } from "react-router-dom";

function Todo({ token }) {
  const navigate = useNavigate();

  if (!token) navigate("/");
  return (
    <>
      <h1>Todo</h1>
      <p>Here is a list of things to do:</p>
      <ul>
        <li>Learn React</li>
        <li>Learn React Router</li>
        <li>Learn Styled Components</li>
      </ul>
    </>
  );
}

export default Todo;

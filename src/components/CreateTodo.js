import axios from "axios";
import { useState } from "react";

function CreateTodo({ token, todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://ec2-3-38-135-202.ap-northeast-2.compute.amazonaws.com:8000/todos",
      {
        id: new Date(),
        todo,
        isCompleted: false,
        userId: token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setTodos([...todos, response.data]);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </>
  );
}

export default CreateTodo;

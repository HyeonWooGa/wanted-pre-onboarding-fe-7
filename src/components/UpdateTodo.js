import axios from "axios";
import { useState } from "react";

function UpdateTodo({ todo, token }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(todo.todo);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted + "");

  const handleButtonClick = () => {
    setIsUpdate(!isUpdate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://ec2-3-38-135-202.ap-northeast-2.compute.amazonaws.com:8000/todos/${todo.id}`,
      {
        todo: updateTodo,
        isCompleted: isCompleted === "true" ? true : false,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setIsUpdate(false);
  };
  return (
    <>
      {isUpdate ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="할 일을 수정하세요"
              type="text"
              value={updateTodo}
              onChange={(e) => setUpdateTodo(e.target.value)}
            />
            <input
              type="text"
              value={isCompleted}
              onChange={(e) => setIsCompleted(e.target.value)}
            />
            <button type="submit">제출</button>
          </form>
          <button onClick={handleButtonClick}>취소</button>
        </>
      ) : (
        <button onClick={handleButtonClick}>수정</button>
      )}
    </>
  );
}

export default UpdateTodo;

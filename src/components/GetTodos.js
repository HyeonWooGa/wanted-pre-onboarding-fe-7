import axios from "axios";
import { useEffect } from "react";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

function GetTodos({ todos, setTodos, token }) {
  const fetchTodos = async () => {
    const response = await axios.get(
      "http://ec2-3-38-135-202.ap-northeast-2.compute.amazonaws.com:8000/todos",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  });

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.isCompleted ? "[Done]" : "[Doing]"} {todo.todo}
            </span>
            <UpdateTodo todo={todo} token={token} />
            <DeleteTodo todo={todo} token={token} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GetTodos;

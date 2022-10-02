import axios from "axios";

function DeleteTodo({ todo, token }) {
  const handleDelete = async () => {
    await axios.delete(
      `http://ec2-3-38-135-202.ap-northeast-2.compute.amazonaws.com:8000/todos/${todo.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  return (
    <>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
}

export default DeleteTodo;

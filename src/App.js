import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./routes/Todo";

function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setToken(token);
  }, [token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/todo" element={<Todo token={token} />} />
      </Routes>
    </>
  );
}

export default App;

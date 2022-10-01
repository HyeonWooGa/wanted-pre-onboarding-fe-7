import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ToDo from "./ToDo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </>
  );
}

export default App;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Home({ token }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  if (token) navigate("/todo");
  return (
    <>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </>
  );
}

export default Home;

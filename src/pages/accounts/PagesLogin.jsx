import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Forgot from "./Forgot";
import SignUp from "./SignUp";
import Login from "./Login";
function PagesLogin() {
  const [state, setState] = useState(0);
  const handClickState = (e) => {
    setState(e);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center py-8 bg-gray-200 ">
      <Link
        to={"/"}
        className="absolute left-0 top-0 p-4 text-blue-500 hover:underline"
      >
        Inicio
      </Link>
      {state === 0 && <Login handClickState={handClickState} />}
      {state === 1 && <SignUp handClickState={handClickState} />}
      {state === 2 && <Forgot handClickState={handClickState} />}
    </div>
  );
}

export default PagesLogin;

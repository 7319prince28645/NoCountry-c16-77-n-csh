import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Forgot from "./Forgot";
import SignUp from "./SignUp";
import Login from "./Login";
function PagesLogin({onClose}) {
  const [state, setState] = useState(0);
  const handClickState = (e) => {
    setState(e);
  };
  return (
    <>
      {state === 0 && <Login handClickState={handClickState} onClose={onClose}/>}
      {state === 1 && <SignUp handClickState={handClickState} />}
      {state === 2 && <Forgot handClickState={handClickState} />}
    </>
  );
}

export default PagesLogin;

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Forgot from "./Forgot";
import SignUp from "./SignUp";
import Login from "./Login";
function PagesLogin({onClose, usserLog}) {
  const [state, setState] = useState(0);
  const handClickState = (e) => {
    setState(e);
  };
  return (
    <div className=" h-[100%] w-full">
      {state === 0 && <Login handClickState={handClickState} onClose={onClose} usserLog={usserLog}/>}
      {state === 1 && <SignUp handClickState={handClickState}/>}
      {state === 2 && <Forgot handClickState={handClickState} />}
    </div>
  );
}

export default PagesLogin;

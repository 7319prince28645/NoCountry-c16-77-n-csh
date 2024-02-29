import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Forgot from "./Forgot";
import SignUp from "./SignUp";
import Login from "./Login";
function PagesLogin({onClose, usserLog}) {
function PagesLogin({onClose, usserLog}) {
  const [state, setState] = useState(0);
  const handClickState = (e) => {
    setState(e);
  };
  return (
<<<<<<< HEAD
    <div className="w-full">
      {state === 0 && <Login handClickState={handClickState} onClose={onClose}/>}
      {state === 1 && <SignUp handClickState={handClickState} />}
=======
    <div className=" h-[100%] w-full">
      {state === 0 && <Login handClickState={handClickState} onClose={onClose} usserLog={usserLog}/>}
      {state === 1 && <SignUp handClickState={handClickState}/>}
>>>>>>> b2939c4051a3546cfdf587fb439a2da65090ea32
      {state === 2 && <Forgot handClickState={handClickState} />}
    </div>
  );
}

export default PagesLogin;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
//-----------------------------------------------------------------------------------------
const Hello = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //-----------------------------------------------------------------------------------------

  console.log(auth?.currentUser?.email);

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/info");
      // <Navigate to="/homepage" replace={true} />;
    } catch (error) {
      console.error(error);
    }
  };
  //-----------------------------------------------------------------------------------------
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/info");
      // return <Navigate to="/homepage" replace={true} />;
    } catch (error) {
      console.error(error);
    }
  };
  //-----------------------------------------------------------------------------------------
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/info");
      // return <Navigate to="/homepage" replace={true} />;
    } catch (err) {
      console.error(err);
    }
  };
  //-----------------------------------------------------------------------------------------
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-white mt-8">
      <h1 className="font-bold">Hello 👋🏾</h1>
      <input
        type="email"
        placeholder="Email..."
        className="p-2 w-[30%] text-slate-700 "
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        className="p-2 w-[30%] text-slate-700 "
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className=" bg-slate-700 px-4 py-2 w-[30%]" onClick={signUp}>
        Sign Up With Your Email
      </button>
      <div className="flex flex-row justify-between w-[30%] gap-2">
        <button className=" bg-slate-700 px-4 py-2 " onClick={signIn}>
          Sign In With Email
        </button>
        <button className=" bg-slate-700 px-4 py-2" onClick={signInWithGoogle}>
          Sign In With Goggle
        </button>
      </div>
    </div>
  );
};

export default Hello;

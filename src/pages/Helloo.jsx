import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

//-----------------------------------------------------------------------------------------
const Helloo = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  //-----------------------------------------------------------------------------------------

  // console.log(auth?.currentUser?.emailVerified);

  //-----------------------------------------------------------------------------------------
  const signIn = async () => {
    try {
      const userCredential = await login(email, password);
      if (userCredential.user.emailVerified) {
        navigate("/info");
      } else {
        setError("Please verify your email to sign in");
      }
    } catch (err) {
      setError(err.message);
      // console.error(err);
    }
  };
  //-----------------------------------------------------------------------------------------
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-white mt-8">
      <h1 className="font-bold">Sign In 👋🏾</h1>
      {error && <p className="text-red-500">{error}</p>}
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
      <p>
        Forget Password?{" "}
        <Link to="/forgetpassword" className="text-slate-700">
          Reset
        </Link>{" "}
      </p>
      <button className=" bg-slate-700 px-4 py-2 w-[30%]" onClick={signIn}>
        Sign In With Email
      </button>
    </div>
  );
};

export default Helloo;

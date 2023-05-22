import { useNavigate } from "react-router-dom";
import { auth } from "../config/Firebase";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
//-----------------------------------------------------------------------------------------
const Bye = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuth();
  // console.log(auth?.currentUser?.email);

  const logOut = async () => {
    try {
      await logout(auth);
      navigate("/");
      // return <Navigate to="/" replace={true} />;
    } catch (err) {
      setError(err.message);
      // console.error(err);
    }
  };
  //-----------------------------------------------------------------------------------------

  return (
    <div className="flex flex-col gap-8 justify-center items-center text-white max-w-[30%] mx-auto mt-8">
      <h1 className="font-bold underline">See You Next Time</h1>
      {error && <p className="text-red-500">{error}</p>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        incidunt molestias, omnis reprehenderit possimus officiis earum sequi
        veritatis aperiam corporis adipisci at culpa eum natus nobis assumenda
        cupiditate aliquid numquam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        incidunt molestias, omnis reprehenderit possimus officiis earum sequi
        veritatis aperiam corporis adipisci at culpa eum natus nobis assumenda
        cupiditate aliquid numquam?
      </p>
      <button className=" bg-slate-700 px-4 py-2 w-full" onClick={logOut}>
        Logout
      </button>
    </div>
  );
};

export default Bye;

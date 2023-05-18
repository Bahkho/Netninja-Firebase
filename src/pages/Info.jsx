import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../config/Firebase";
import { getDocs, addDoc, deleteDoc, collection } from "firebase/firestore";

const Info = () => {
  const navigate = useNavigate();
  const [seriesList, setSeriesList] = useState([]);
  const [releasedDate, setReleasedDate] = useState(0);
  const [receivedAnOscar, setReceivedAnOscar] = useState(false);
  const seriesCollectionRef = collection(database, "series");
  //-----------------------------------------------------------------------------------------
  useEffect(() => {
    const getSeriesList = async () => {
      try {
        const data = await getDocs(seriesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log(filteredData);
        setSeriesList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getSeriesList();
  }, []);
  //-----------------------------------------------------------------------------------------
  const nextPage = () => {
    navigate("/logout");
  };
  //-----------------------------------------------------------------------------------------
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-white max-w-[30%] mx-auto mt-8">
      <h1 className=" text-2xl font-bold underline">Welcome</h1>
      <div className="flex flex-row justify-between text-black gap-4 w-full">
        <input
          type="text"
          placeholder="Series Name..."
          className="px-4 py-2 w-[100%]"
        />
        <input
          type="number"
          placeholder="Release Date..."
          className="px-4 py-2 w-[100%]"
        />
      </div>
      <div className="flex flex-row justify-between w-full gap-4">
        <div className="w-[100%] flex items-center justify-center">
          <input type="checkbox" />
          <label htmlFor="">Received An Oscar</label>
        </div>
        <button className=" bg-slate-700 px-4 py-2 w-[100%]">Submit</button>
      </div>
      <br />
      <div className="w-full text-center">
        {seriesList.map((series) => (
          <div key={series.id}>
            <p className="underline">Series Title</p>
            <h1
              className={
                series.receivedAnOscar
                  ? " text-xl text-blue-600"
                  : " text-xl text-green-600"
              }
            >
              {series.title}
            </h1>
            <p className="underline"> Release Date</p>
            <p>{series.releasedDate}</p>
          </div>
        ))}
      </div>
      <br />
      <button className=" bg-slate-700 px-4 py-2 w-full" onClick={nextPage}>
        Next Page To Logout
      </button>
    </div>
  );
};

export default Info;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database, auth } from "../config/Firebase";
import {
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  collection,
} from "firebase/firestore";

//-----------------------------------------------------------------------------------------
const Info = () => {
  const navigate = useNavigate();
  const [seriesList, setSeriesList] = useState([]);
  // new states for series
  const [seriesTitle, setSeriesTitle] = useState("");
  const [releasedDate, setReleasedDate] = useState(0);
  const [receivedAnOscar, setReceivedAnOscar] = useState(false);
  //update series title
  const [updateSeriesTitle, setUpdateSeriesTitle] = useState("");
  //error message
  const [error, setError] = useState("");
  //-----------------------------------------------------------------------------------------
  const seriesCollectionRef = collection(database, "series");
  // console.log(auth?.currentUser?.email);

  //-----------------------------------------------------------------------------------------
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
      setError(err.message);
      // console.error(err);
    }
  };
  useEffect(() => {
    getSeriesList();
  }, []);
  //-----------------------------------------------------------------------------------------
  const nextPage = () => {
    navigate("/logout");
  };
  //-----------------------------------------------------------------------------------------
  const onSubmitSeries = async () => {
    try {
      await addDoc(seriesCollectionRef, {
        title: seriesTitle,
        releasedDate: releasedDate,
        receivedAnOscar: receivedAnOscar,
        userId: auth?.currentUser?.uid,
      });
      getSeriesList();
    } catch (err) {
      setError(err.message);
      // console.error(err);
    }
  };
  //-----------------------------------------------------------------------------------------
  const deleteSeries = async (id) => {
    const seriesDocRef = doc(database, "series", id);
    try {
      await deleteDoc(seriesDocRef);
      getSeriesList();
    } catch (err) {
      setError(err.message);
      // console.error(err);
    }
  };
  //-----------------------------------------------------------------------------------------
  const updateSeries = async (id) => {
    try {
      const seriesDocRef = doc(database, "series", id);
      await updateDoc(seriesDocRef, {
        title: updateSeriesTitle,
      });
      getSeriesList();
    } catch (err) {
      setError(err.message);
      // console.error(err);
    }
  };
  //-----------------------------------------------------------------------------------------
  // console.log(releasedDate);
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-white max-w-[30%] mx-auto my-8">
      <h1 className=" text-2xl font-bold underline">Welcome</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-row justify-between text-black gap-4 w-full">
        <input
          type="text"
          placeholder="Series Name..."
          className="px-4 py-2 w-[100%]"
          onChange={(e) => setSeriesTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release Date..."
          className="px-4 py-2 w-[100%]"
          onChange={(e) => setReleasedDate(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-row justify-between w-full gap-4">
        <div className="w-[100%] flex items-center justify-center">
          <input
            type="checkbox"
            checked={receivedAnOscar}
            onChange={(e) => setReceivedAnOscar(e.target.checked)}
          />
          <label htmlFor="">Received An Oscar</label>
        </div>
        <button
          className=" bg-slate-700 px-4 py-2 w-[100%]"
          onClick={onSubmitSeries}
        >
          Submit
        </button>
      </div>
      <br />
      <div className="w-full text-center">
        {seriesList.map((series) => (
          <div key={series.id} className=" mb-8 flex flex-col gap-4 border">
            <div>
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
            </div>
            <div>
              <p className="underline"> Release Date</p>
              <p>{series.releasedDate}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Update Title"
                onChange={(e) => setUpdateSeriesTitle(e.target.value)}
                className="text-black"
              />
              <button
                className="bg-slate-700 px-4"
                onClick={() => updateSeries(series.id)}
              >
                Update Title
              </button>
            </div>
            <button
              className="bg-slate-700 px-4"
              onClick={() => deleteSeries(series.id)}
            >
              Delete Series
            </button>
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

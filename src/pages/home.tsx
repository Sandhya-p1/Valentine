import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [yes, setYes] = useState(false);

  const navigate = useNavigate();
  const handleYesClick = () => {
    setYes(true);
    navigate("/accepted");
  };

  return (
    <div className="text-2xl bg-white rounded-3xl shadow-xl shadow-pink-200 p-12  ">
      <div className="flex flex-col gap-y-10 items-center justify-center">
        <h1 className="text-5xl text-pink-500 font-bold">
          Will You Be My Valentine ?
        </h1>
        <div className="flex items-center space-x-8 text-red-400">
          <button
            onClick={handleYesClick}
            className="px-8 py-2 text-2xl hover:scale-150 transition-transform ease-linear duration-300 rounded-2xl  bg-pink-100 font-semibold"
          >
            Yes 💗
          </button>
          <button className="px-8 py-2  text-2xl rounded-2xl bg-pink-100 font-semibold">
            No 😭
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

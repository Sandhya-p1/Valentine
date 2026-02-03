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
    <div className="home-bg min-h-screen flex items-center justify-center w-screen">
      <div className=" text-2xl border  rounded-3xl shadow-xl shadow-pink-200 px-12 py-20  ">
        <div className="flex flex-col gap-y-10 items-center justify-center">
          <h1 className="text-6xl text-pink-500 font-bold">
            Will You Be My Valentine ?💗
          </h1>
          <div className="flex items-center space-x-8 text-red-400">
            <button
              onClick={handleYesClick}
              className="cursor-pointer px-8 py-2 text-3xl hover:scale-150 transition-transform ease-linear duration-300 rounded-2xl  bg-pink-100 font-semibold"
            >
              Yes 💗
            </button>
            <button
              onMouseEnter={(e) => {
                const x = Math.random() * 300 - 100;
                const y = Math.random() * 300 - 100;

                e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
              }}
              className=" cursor-not-allowed px-8 py-2 text-3xl rounded-2xl  bg-pink-100 font-semibold transition-transform duration-300 ease-out "
            >
              No 😭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

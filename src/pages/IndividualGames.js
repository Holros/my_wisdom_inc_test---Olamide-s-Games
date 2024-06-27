import { Link, useParams } from "react-router-dom";
import backIcon from "../static/icons/icons8-back-100.png";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const IndividualGames = () => {
  const [gameInfo, setGameInfo] = useState({});
  const [seeMore, setSeeMore] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    const fetchGameInfo = async () => {
      const options = {
        method: "GET",
        url: `https://steam-api7.p.rapidapi.com/appDetails/${id}`,
        headers: {
          "x-rapidapi-key":
            "e3230fb4e5mshae41db240f6bce2p1a9ff0jsn4d4718bef7e7",
          "x-rapidapi-host": "steam-api7.p.rapidapi.com",
        },
      };

      try {
        toast.loading("fetching app data");
        const response = await axios.request(options);
        setGameInfo(response.data);
        toast.dismiss();
      } catch (error) {
        if (error.response.status === 404 || error.response.status === 500) {
          setNotFound(true);
          return;
        }
        const err = error.response ? error.response.data : error.message;
        toast.dismiss();
        toast.error(err);
        // console.error(error);
      }
    };
    fetchGameInfo();
  }, [id]);

  return gameInfo?.name ? (
    <div
      className="p-4 rounded-lg"
      style={{
        backgroundImage: `url(${gameInfo?.background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Link
        className="font-bold hover:text-[20px] inline-flex items-center gap-2 mb-4 bg-gray-100 px-2 py-2 rounded-lg"
        to="/"
      >
        <img src={backIcon} alt="back" className="max-w-full w-6" /> Back
      </Link>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <img
          src={gameInfo?.header_image}
          alt="Header"
          className="w-full rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{gameInfo?.name}</h1>
        <div className="flex gap-2 mb-4">
          {gameInfo?.genres?.map((genre) => (
            <span
              key={genre.id}
              className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm "
            >
              {genre.description}
            </span>
          ))}
        </div>
        <div className="flex flex-col mb-4 gap-1 items-start">
          <p
            className={`text-gray-700 ${
              seeMore ? "line-clamp-none" : "line-clamp-[8]"
            }`}
            style={{ wordBreak: "break-word" }}
            dangerouslySetInnerHTML={{
              __html: gameInfo?.detailed_description,
            }}
          ></p>
          <button
            onClick={() => setSeeMore((value) => !value)}
            className=" text-green-400 underline font-bold"
          >
            {seeMore ? "See less" : "See More"}
          </button>
        </div>

        <p className="text-xl font-bold my-2">Some Shots From Game</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gameInfo?.screenshots?.slice(0, 6).map((screenshot) => (
            <img
              key={screenshot.id}
              src={screenshot.path_thumbnail}
              alt={`Screenshot ${screenshot.id}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>
        <p className="text-xl font-bold mt-5 mb-2">Related Videos</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gameInfo?.movies?.slice(0, 2).map((movie) => (
            <div key={movie.id} className="w-full rounded-lg">
              <video controls className="w-full rounded-lg">
                <source src={movie.mp4.max} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        {gameInfo?.website && (
          <a
            href={gameInfo?.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 hover:bg-green-700 px-4 py-2 font-bold text-white rounded-lg my-4 inline-block"
          >
            Visit Official Website
          </a>
        )}
      </div>
    </div>
  ) : notFound ? (
    <p className="text-center font-bold my-5 text-xl">
      This game is currently not available, click{" "}
      <Link to="/" className="underline text-green-400 hover:text-green-700">
        here
      </Link>{" "}
      to check out other games
    </p>
  ) : (
    <p className="text-center font-bold my-5 text-xl">Loading...</p>
  );
};

export default IndividualGames;

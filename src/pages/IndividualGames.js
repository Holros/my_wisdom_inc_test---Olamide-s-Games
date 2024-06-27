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
  /* const gameInfo = {
    name: "Grand Theft Auto V",
    detailed_description:
      'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.<br> <br>Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second. <br> <br>The game offers players a huge range of PC-specific customization options, including over 25 separate configurable settings for texture quality, shaders, tessellation, anti-aliasing and more, as well as support and extensive customization for mouse and keyboard controls. Additional options include a population density slider to control car and pedestrian traffic, as well as dual and triple monitor support, 3D compatibility, and plug-and-play controller support.  <br> <br>Grand Theft Auto V for PC also includes Grand Theft Auto Online, with support for 30 players and two spectators. Grand Theft Auto Online for PC will include all existing gameplay upgrades and Rockstar-created content released since the launch of Grand Theft Auto Online, including Heists and Adversary modes.<br> <br>The PC version of Grand Theft Auto V and Grand Theft Auto Online features First Person Mode, giving players the chance to explore the incredibly detailed world of Los Santos and Blaine County in an entirely new way.<br> <br>Grand Theft Auto V for PC also brings the debut of the Rockstar Editor, a powerful suite of creative tools to quickly and easily capture, edit and share game footage from within Grand Theft Auto V and Grand Theft Auto Online. The Rockstar Editor’s Director Mode allows players the ability to stage their own scenes using prominent story characters, pedestrians, and even animals to bring their vision to life. Along with advanced camera manipulation and editing effects including fast and slow motion, and an array of camera filters, players can add their own music using songs from GTAV radio stations, or dynamically control the intensity of the game’s score. Completed videos can be uploaded directly from the Rockstar Editor to YouTube and the Rockstar Games Social Club for easy sharing.  <br> <br>Soundtrack artists The Alchemist and Oh No return as hosts of the new radio station, The Lab FM. The station features new and exclusive music from the production duo based on and inspired by the game’s original soundtrack. Collaborating guest artists include Earl Sweatshirt, Freddie Gibbs, Little Dragon, Killer Mike, Sam Herring from Future Islands, and more. Players can also discover Los Santos and Blaine County while enjoying their own music through Self Radio, a new radio station that will host player-created custom soundtracks.<br><br>Special access content requires Rockstar Games Social Club account. Visit <a href="https://steamcommunity.com/linkfilter/?u=http%3A%2F%2Frockstargames.com%2Fv%2Fbonuscontent" target="_blank" rel=" noopener"  >http://rockstargames.com/v/bonuscontent</a> for details.',

    header_image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1716224849",
    screenshots: [
      {
        id: 0,
        path_thumbnail:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_32aa18ab3175e3002217862dd5917646d298ab6b.600x338.jpg?t=1716224849",
        path_full:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_32aa18ab3175e3002217862dd5917646d298ab6b.1920x1080.jpg?t=1716224849",
      },
      {
        id: 1,
        path_thumbnail:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_2744f112fa060320d191a50e8b3a92441a648a56.600x338.jpg?t=1716224849",
        path_full:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_2744f112fa060320d191a50e8b3a92441a648a56.1920x1080.jpg?t=1716224849",
      },
      {
        id: 2,
        path_thumbnail:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_da39c16db175f6973770bae6b91d411251763152.600x338.jpg?t=1716224849",
        path_full:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_da39c16db175f6973770bae6b91d411251763152.1920x1080.jpg?t=1716224849",
      },
      {
        id: 3,
        path_thumbnail:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_bd5db78286be0a7c6b2c62519099a9e27e6b06f3.600x338.jpg?t=1716224849",
        path_full:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_bd5db78286be0a7c6b2c62519099a9e27e6b06f3.1920x1080.jpg?t=1716224849",
      },
      {
        id: 4,
        path_thumbnail:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_b1a1cb7959d6a0e6fcb2d06ebf97a66c9055cef3.600x338.jpg?t=1716224849",
        path_full:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_b1a1cb7959d6a0e6fcb2d06ebf97a66c9055cef3.1920x1080.jpg?t=1716224849",
      },
      {
        id: 5,
        path_thumbnail:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_bc5fc79d3366c837372327717249a4887aa46d63.600x338.jpg?t=1716224849",
        path_full:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_bc5fc79d3366c837372327717249a4887aa46d63.1920x1080.jpg?t=1716224849",
      },
      {
        id: 6,
        path_thumbnail:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_d2eb9d3e50f9e4cb8db37d2976990b3795da8187.600x338.jpg?t=1716224849",
        path_full:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_d2eb9d3e50f9e4cb8db37d2976990b3795da8187.1920x1080.jpg?t=1716224849",
      },
    ],
    movies: [
      {
        id: 257010267,
        name: "GTA Online: Cluckin' Bell Farm Raid Missions (INT)",
        thumbnail:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257010267/movie.293x165.jpg?t=1711059406",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/257010267/movie480_vp9.webm?t=1711059406",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/257010267/movie_max_vp9.webm?t=1711059406",
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/257010267/movie480.mp4?t=1711059406",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/257010267/movie_max.mp4?t=1711059406",
        },
        highlight: true,
      },
      {
        id: 257010262,
        name: "GTA Online: Cluckin' Bell Farm Raid Missions (BR)",
        thumbnail:
          "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257010262/movie.293x165.jpg?t=1711059435",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/257010262/movie480_vp9.webm?t=1711059435",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/257010262/movie_max_vp9.webm?t=1711059435",
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/257010262/movie480.mp4?t=1711059435",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/257010262/movie_max.mp4?t=1711059435",
        },
        highlight: true,
      },
    ],
    capsule_image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/capsule_231x87.jpg?t=1716224849",
    capsule_imagev5:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/capsule_184x69.jpg?t=1716224849",
    website: "http://www.rockstargames.com/V/",
    genres: [
      { id: "1", description: "Action" },
      { id: "25", description: "Adventure" },
    ],
    release_date: { coming_soon: false, date: "13 Apr, 2015" },
    background:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/page_bg_generated_v6b.jpg?t=1716224849",
    background_raw:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/page_bg_generated.jpg?t=1716224849",
  }; */

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

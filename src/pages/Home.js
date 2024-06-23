import { useSelector } from "react-redux";
import Search from "../Component/Search";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const search = useSelector((state) => state.search);
  const [totalGames, setTotalGames] = useState(0);

  useEffect(() => {
    const fetchTotalGames = async () => {
      const options = {
        method: "GET",
        url: "https://steam-api7.p.rapidapi.com/totalApps",
        headers: {
          "x-rapidapi-key":
            "e3230fb4e5mshae41db240f6bce2p1a9ff0jsn4d4718bef7e7",
          "x-rapidapi-host": "steam-api7.p.rapidapi.com",
        },
      };

      try {
        toast.loading("Loading");
        const response = await axios.request(options);
        // console.log(response.data);
        toast.dismiss();
        setTotalGames(response.data.totalApps);
      } catch (error) {
        const err = error.response ? error.response.data : error.message;
        toast.dismiss();
        toast.error(err);
        // console.error(error);
      }
    };
    fetchTotalGames();
  }, []);

  return (
    <>
      <Search />
      <div className="flex flex-col gap-7 py-3">
        <p className="text-lg font-bold">Explore over {totalGames} games</p>
        <div className="flex flex-col gap-3">
          {search.hasSearched ? (
            search.result?.length > 0 ? (
              search.result?.map((game) => (
                <div
                  className="px-3 py-4 bg-white hover:border border-green-400 rounded-lg flex gap-2 justify-between items-center"
                  key={game?.appid}
                >
                  <p>{game?.name}</p>
                  <Link
                    to={`/game/${game?.appid}`}
                    className="text-center text-white bg-green-400 hover:bg-green-700 p-1 rounded-lg"
                  >
                    Check Out
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">
                No game found, try searching for something else
              </p>
            )
          ) : (
            <p className="text-gray-400 text-center">
              Type in the search bar and click the search icon to check apps
              available
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

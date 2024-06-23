import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../static/icons/icons8-search-white.png";
import { inputParam, searchGame } from "../Redux/slices/searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchParam = useSelector(state => state.search.param)
  return (
    <div className="flex-col flex my-3 gap-2">
      <p className="text-lg font-bold">Search For Games</p>
      <div className="flex border border-green-400 rounded-lg overflow-hidden">
        <input
          type="search"
          className="w-full p-2 outline-none focus:bg-green-50"
          placeholder="Search"
          value={searchParam}
          onChange={(e) => dispatch(inputParam(e.target.value))}
        />
        <img
          src={searchIcon}
          alt="search"
          className="bg-green-400 p-2  w-10 h-auto max-w-full hover:bg-green-700"
          onClick={() => dispatch(searchGame(searchParam))}
        />
      </div>
    </div>
  );
};

export default Search;

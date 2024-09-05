import { useDispatch } from "react-redux";
import { setSearch } from "../store/slices/coutriesSlice";

const SearchCountries = () => {
    const dispatch = useDispatch()
  return (
    <div className="mb-5 mt-5 px-10">
      <input
        className="border border-black px-4 py-2"
        type="text"
        placeholder="search for countries...."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};

export default SearchCountries;

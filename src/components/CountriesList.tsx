import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import SearchCountries from "./SearchCountries";
import { add, remove } from "../store/slices/likedCountriesSlice";
import { useState } from "react";

const CountriesList = () => {
  const countries = useSelector(
    (store: RootState) => store.countries.countries
  );
  const search = useSelector((store: RootState) => store.countries.search);
  const likedCountries = useSelector((state: RootState) => state.liked.liked);
  const dispatch = useDispatch();
  const [showLiked, setShowLiked] = useState(false);

  const searchedCountries = search
    ? countries.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      )
    : countries;

  const isLiked = (cca2: string) => {
    return likedCountries.some((c) => c.cca2 === cca2);
  };

  return (
    <div className="pr-10">
      <SearchCountries />

      <ul className="flex flex-wrap justify-between gap-10 px-10">
        {searchedCountries.map((c) => (
          <li key={c.cca2} className="border border-black px-4 py-2">
            <img src={c.flags.png} alt={`Flag of ${c.name.common}`} />
            <p>{c.name.common}</p>
            <button
              onClick={
                isLiked(c.cca2)
                  ? () => dispatch(remove(c.cca2))
                  : () => dispatch(add(c))
              }
              className={`border border-black px-4 py-2 font-bold ${
                isLiked(c.cca2) ? "bg-red-600 text-white border-red-600" : ""
              }`}
            >
              like
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;

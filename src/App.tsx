import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { render } from "./store/slices/coutriesSlice";
import CountriesList from "./components/CountriesList";

function App() {
  const api_url: string = "https://restcountries.com/v3.1";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCoutries = async () => {
      try {
        const response = await fetch(`${api_url}/all`);
        const countries = await response.json();
        dispatch(render(countries))
      } catch (error) {
        console.error(error);
      }
    };
    fetchCoutries();
  }, []);
  return (
    <div>
      <CountriesList />
    </div>
  );
}

export default App;

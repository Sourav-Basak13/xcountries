import { useEffect, useState } from "react";
import "./App.css";
import CountryComponent from "./components/CountryComponent";

const fetchCountries = async () => {
  const response = await fetch(
    "https://xcountries-backend.azurewebsites.net/all"
  );
  const data = await response.json();

  return data;
};

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(countries, "countries");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        width: "80%",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      {countries.map((country) => (
        <CountryComponent key={country?.abbr} {...country} />
      ))}
    </div>
  );
}

export default App;

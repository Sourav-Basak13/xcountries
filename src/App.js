import { useEffect, useState } from "react";
import "./App.css";
import CountryComponent from "./components/CountryComponent";

const fetchCountries = async () => {
  const response = await fetch(
    "https://xcountries-backend.azurewebsites.net/alll"
  );
  const data = await response.json();

  return data;
};

function App() {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error(`Error fetching data:${error.message}`))
      .finally(() => setLoad(false));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "20px",
      }}
    >
      {load && <p>Loading........</p>}
      {!load &&
        countries.map((country) => (
          <CountryComponent key={country?.abbr} {...country} />
        ))}
    </div>
  );
}

export default App;

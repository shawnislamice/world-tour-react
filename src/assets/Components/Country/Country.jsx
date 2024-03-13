import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountries,handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  
  return (
    <div className={`country ${visited && "visited"}`}>
      <img src={country.flags.png} alt="" />
      <h3 style={{ color: visited ? "blue" : "black" }}>
        Country: {country.name.common}{" "}
      </h3>
      <p>Population: {country.population} </p>
      <p>CCA3: {country.cca3}</p>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited this country" : "I will be Going"} <br />
      <button onClick={() => handleVisitedCountries(country)}>
        Mark As Visited
      </button>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
      <CountryDetail country={country} handleVisitedFlags={handleVisitedFlags} handleVisitedCountries={handleVisitedCountries}></CountryDetail>
    </div>
  );
};

export default Country;

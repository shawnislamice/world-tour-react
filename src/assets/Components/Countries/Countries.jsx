import { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../Country/Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all
      `)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visitedCountries,setVisitedCountries]=useState([])

  const handleVisitedCountries=(country)=>{
    const newVisitedCountries=[...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
  }

  const [visitedFlags,setVisitedFlags]=useState([])
  const handleVisitedFlags=(flag)=>{
    const newVisitedFlags=[...visitedFlags,flag]
    setVisitedFlags(newVisitedFlags)
  }
  //Remove item from an array
  
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ol>
            {
                visitedCountries.map((country)=><li key={country.cca3}>{country.name.common} </li>)
            }
        </ol>
        <div className="flag-container">
            {
                visitedFlags.map((flag,index)=><img key={index} src={flag}></img>)
            }
        </div>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

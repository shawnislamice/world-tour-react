const CountrySpec = (props) => {
const { handleVisitedFlags, handleVisitedCountries ,country} = props;  
    return (
    <div>
      <h4>Country Spec:{country.name.common}</h4>
    </div>
  );
};

export default CountrySpec;

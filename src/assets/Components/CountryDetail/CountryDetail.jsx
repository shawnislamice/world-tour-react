import CountrySpec from "../CountrySpec/CountrySpec";

const CountryDetail = (props) => {
  return (
    <div>
      <h4>Country Detail</h4>
      <CountrySpec {...props}></CountrySpec>
    </div>
  );
};

export default CountryDetail;
import OneCountry from "./OneCountry";

const Filtered = ({ filteredCountries, handleClick }) => {
  if (filteredCountries.length > 10) {
    return (
      <div className="">
        <p className="pb-3 fs-5">Too many matches, be more specific</p>
      </div>
    );
  } else if (filteredCountries.length === 1) {
    return <OneCountry country={filteredCountries} />;
  } else {
    return (
      <div className="pb-2">
        {filteredCountries.map((country) => {
          return (
            <div className="row mb-3 mt-2" key={country.name.common}>
              <p className="col-8">{country.name.common}</p>
              <button
                id="showBtn"
                className="btn
                ms-3 w-10 shadow-sm text-light rounded col me-3"
                onClick={() => handleClick(country.name.common)}
              >
                Show
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Filtered;

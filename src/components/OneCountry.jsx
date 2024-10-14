// import Weather from "./Weather";
const OneCountry = ({ country }) => {
  return (
    <div>
      <h2 className="font-monospace fs-1">
        <strong>{country[0].name.common}</strong>
      </h2>
      <p className="fs-5">Capital: {country[0].capital}</p>
      <p className="fs-5">Area: {country[0].area}</p>
      <h2 className="font-monospace fs-1">
        <strong>Languages</strong>
      </h2>
      <ul className="list list-unstyled">
        {Object.values(country[0].languages).map((language, index) => {
          return (
            <li key={index} className="fs-5">
              {language}
            </li>
          );
        })}
      </ul>
      <img
        className="img-fluid mb-4 shadow rounded"
        src={country[0].flags.png}
        alt={country[0].flags.alt}
      />
    </div>
  );
};

export default OneCountry;

/* <Weather country={country[0].capital[0]} /> */

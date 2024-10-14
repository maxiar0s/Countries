const SearchFilter = ({ search, handleChange }) => {
  return (
    <div className="">
      <p id="search" className="mt-3 shadow text-light p-3 b rounded fs-4 ">
        <strong>FIND COUNTRIES</strong>
      </p>
      <input
        id="search-input"
        className="text-center mt-2 mb-3 rounded shadow-sm p-1 fs-5 border-1 border-dark"
        type="text"
        placeholder="Search "
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};

export default SearchFilter;

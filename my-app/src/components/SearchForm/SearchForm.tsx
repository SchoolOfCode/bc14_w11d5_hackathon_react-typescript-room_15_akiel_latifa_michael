import React from 'react';

interface SearchFormProps {
  searchLocation: string;
  setSearchLocation: (location: string) => void;
  handleSearch: () => void;

}

function SearchForm({ searchLocation, setSearchLocation,handleSearch }: SearchFormProps) {
  const handleClick = () => {
    handleSearch(); // Call the handleSearch function when the button is clicked
  };

  return (
    <div>
      <input
        type="text"
        value={searchLocation}
        onChange={(event) => setSearchLocation(event.target.value)}
        placeholder="Type City"
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchForm;

import React, { useState } from 'react';


interface SearchFormProps {
    searchLocation: string;
    setSearchLocation: (location: string) => void;
  }


function SearchForm({searchLocation, setSearchLocation}:SearchFormProps){
    const handleSearch = ()=>{}




    return     <div>
    <input
      type="text"
      value={searchLocation}
      onChange={(event) => setSearchLocation(event.target.value)}
      placeholder="Type City"
    />
    <button onClick={handleSearch}>Search</button>
 </div>
;

}


export default SearchForm
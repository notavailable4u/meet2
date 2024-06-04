import { useEffect, useState } from 'react';

const CitySearch = ({allLocations, setCurrentCity, setInfoAlert }) => {
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
      setSuggestions(allLocations);
    }, [`${allLocations}`]);
    
    const handleInputChange = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];
        setQuery(value);
        setSuggestions(filteredLocations);

        let infoText;
        if (filteredLocations.length === 0) {
          infoText = "We can not find the city you are looking for. Please try another city"
        } else {
          infoText = ""
        }
        setInfoAlert(infoText);
    };

    const handleItemClicked = (event) => {
      const value = event.target.textContent;
      setQuery(value);
      setShowSuggestion(false);
      setCurrentCity(value);
      setInfoAlert("");
    };
  //   const handleClick = (suggestion) => {
  //     setQuery(suggestion);
  //     setShowSuggestion(false);
  //     setCurrentCity(suggestion);
  //     /*setInfoAlert("")*/
  // };


    return (
        <div id="city-search">
          <input
             type="text"
             className="city"
             placeholder="Search for a city"
             value={query}
             onFocus={() => setShowSuggestion(true)}
             onChange={handleInputChange}
         />
         {showSuggestion ?
        <ul className="suggestion">
          {suggestions.map((suggestion) => {
            return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
          })}
          <li key='See all cities' onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>  
         {/* {showSuggestion ? <ul className='suggestion'>
         {suggestions.map((suggestion) => {
                        return (
                            //<li onClick={() => handleClick(suggestion)} key={suggestion} >{suggestion}</li>
                        );
                    })}
            <li key='See all the cities' onClick={() => handleClick('See all cities')}>
              <b>See all cities</b>
            </li> */}
         </ul> : null}
        </div>
    )
}

export default CitySearch;
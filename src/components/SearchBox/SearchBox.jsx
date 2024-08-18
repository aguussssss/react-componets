import React, { useState } from 'react';
import './SearchBox.css';

function SearchBox({ placeHolder, data }){
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleInputChange = (event) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);

        const filteredSuggestions = data.filter(item => 
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredData(filteredSuggestions);
    };

    const clearInput = () => {
        setQuery('');
        setFilteredData([]);
    };

    return (
        <div className="search">
            <div className="search-input">
                <input
                    type="text"
                    placeholder={placeHolder}
                    value={query}
                    onChange={handleInputChange}
                />
                <button className="clear-btn" onClick={clearInput}>
                    X
                </button>
            </div>
            {filteredData.length > 0 && (
                <div className="data-result">
                    {filteredData.slice(0, 10).map((item, index) => (
                        <a key={index} href="#" className="data-item">
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBox;
import React from 'react';

const SearchWidget = () => {
    return (
        <div className="search-widget mb-50">
            <div className="search-wrap">
                <input type="search" placeholder="Searching..." name="s" className="search-input" value="" />
                <button type="submit" value="Search"><i className="flaticon-search"></i></button>
            </div>
        </div>
    )
}

export default SearchWidget;
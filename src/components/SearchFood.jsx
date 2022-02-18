import React from "react";

function SearchFood(props) {
    return (
        <input onChange={props.handleSearch} type="text" placeholder="search" />
    )
}

export default SearchFood;
import React from "react";

function Search(props) {


    return (
        <form className="container">
            <div className="form-group">
                <label htmlFor="search">Search By Name:</label>
                <input
                    onChange={props.onFilterChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an employee"
                    id="search"
                />
            </div>
        </form>
    );
}

export default Search;
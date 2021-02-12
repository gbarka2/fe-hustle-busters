import React from "react"

const Search = (props) => {

    return(
        <div className="search-div">
            <div className="search-title">Search {props.value}</div>
            <form className="search-form" onSubmit={props.handleSubmit}>
                <input
                    className="search-input" 
                    type="text"
                    name="searchbox"
                    placeholder={props.placeholder}
                    onChange={props.handleChange} 
                />
                <input className="submit-button" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Search
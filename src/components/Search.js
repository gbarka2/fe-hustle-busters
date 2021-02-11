import React from "react"

const Search = (props) => {

    return(
        <div className="search-div">Search {props.value}
            <form className="search-form" onSubmit={props.handleSubmit}>
                <input
                    className="search-input" 
                    type="text"
                    name="searchbox"
                    placeholder={props.placeholder}
                    onChange={props.handleChange} 
                />
                <input className="search-button" type="submit" value="Submit"/>
            </form>
            <hr />
        </div>
    )
}

export default Search
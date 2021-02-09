import React from "react"

const Search = (props) => {

    return(
        <div className="search-div">Search {props.value}
            <form onSubmit={props.handleSubmit}>
                <input 
                    type="text"
                    name="searchbox"
                    // value="blank"
                    placeholder={props.placeholder}
                    onChange={props.handleChange} 
                />
                <input type="submit" value="Submit"/>
            </form>
            <hr />
        </div>
    )
}

export default Search
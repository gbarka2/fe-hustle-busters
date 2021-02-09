import React from "react"

const Search = (props) => {

    const handleChange = (event) => {
        event.preventDefault()
        props.setSearchDivision(event.target.value)
    }

    const handleSubmit = (event) => {
        if (props.searchDivision !== "") {
            props.getDivisionByName()
        }
    }

    return(
        <div className="search-div">Search {props.value}
            <form>
                <input 
                    type="text"
                    name="searchbox"
                    // value="blank"
                    placeholder={props.placeholder}
                    onChange={handleChange} 
                />
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
            <hr />
        </div>
    )
}

export default Search
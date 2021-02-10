import React from "react"

const Search = (props) => {

    const handleChange = (event) => {
        event.preventDefault()
        props.setSearchDivision(event.target.value)
        // props.setDivisions()
        // console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (props.searchDivision !== "") {
            props.getDivisionByName(props.searchDivision)
        }
    }

    return(
        <div className="search-div">Search {props.value}
            <form onSubmit={handleSubmit}>

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
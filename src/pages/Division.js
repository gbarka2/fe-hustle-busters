import React from "react"
import Lead from "../components/Lead"
import Search from '../components/Search'


const Division = (props) => {
  const { divisions } = props
  
  const handleDivisionChange = (event) => {
    event.preventDefault()
    props.setSearchDivision(event.target.value)
  }

  const handleDivisionSubmit = (event) => {
    event.preventDefault()
    if (props.searchDivision !== "") {
        props.getDivisionByName(props.searchDivision)
    }
  }

  const loaded = () => (
    <>
      <Search value="Divisions" placeholder="Enter Division Here" handleChange={handleDivisionChange} handleSubmit={handleDivisionSubmit} />
      <div className="division-div">
      {divisions.map((division) => (
        <article key={division._id}>
          <h2>{division.name}</h2>
          <h3>{division.motto}</h3>
          <img src={division.img} alt='' />
          <div className="leads-div">
          {division.leads.map((lead, index) => (
            <Lead lead={lead} key={index}/>
          ))}
        </div>
        </article>
      ))}
      </div>

    </>
  )
  const loading = <h1>Loading...</h1>
  
  
  return divisions ? loaded() : loading 
}

export default Division;
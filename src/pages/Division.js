import React from "react"
import Lead from "../components/Lead"
import Search from '../components/Search'


const Division = (props) => {
  const { divisions } = props

  // const handleDivisionChange = (event) => {
  //   event.preventDefault()
  //   props.setSearchDivision(event.target.value)
  // }

  // const handleDivisionSubmit = (event) => {
  //   event.preventDefault()
  //   if (props.searchDivision !== "") {
  //       props.getDivisionByName(props.searchDivision)
  //   }
  // }


  const loaded = () => (
    <>
    {/* this is right */}
      {/* <Search value="Divisions" placeholder="Enter Division Here" handleChange={handleDivisionChange} handleSubmit={handleDivisionSubmit} /> */}
      <div className="division-div">
      {divisions.map((division) => (
        <article className="division-article" key={division._id}>
          <h2 className="division-h2">{division.name}</h2>
          <h3 className="division-h3">{division.motto}</h3>
          <img className="division-img" src={division.img} alt='' />
          <div className="division-div-div">
          {division.leads.map((lead, index) => (
            <div className="division-div-lead">
              <Lead 
                lead={lead} 
                key={index} 
                selectLead={props.selectLead} 
                setSelectedLead={props.setSelectedLead} 
                emptyLead={props.emptyLead} 
                deleteLead={props.deleteLead}/>
            </div>
          ))}
        </div>
        </article>
      ))}
      </div>

    </>
  )
  const loading = <h2 className="division-h2">Loading...</h2>
  
  return divisions ? loaded() : loading 
}

export default Division;
import React from "react"
import Lead from "../components/Lead"

const Division = (props) => {
  const { divisions } = props

  const loaded = () => (
    <>
      <div className="division-div">
        <h2 className="division-h2">All Divisions</h2>
      {divisions.map((division) => (
        <article className="division-article" key={division._id}>
          <h3 className="division-h3">{division.name}</h3>
          <p className="division-motto">{division.motto}</p>
          {/* <img className="division-img" src={division.img} alt='' /> */}
          <div className="division-div-div">
          {division.leads.map((lead, index) => (
            <div className="division-div-lead">
              <Lead 
                lead={lead} 
                key={index} 
                selectLead={props.selectLead} 
                setSelectedLead={props.setSelectedLead} 
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
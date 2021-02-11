import React from 'react'
import Lead from './Lead'

const Leads = (props) => {

  const url = "https://hustle-busters.herokuapp.com"
  console.log('leads props-', props)
  
  return (
    <div className="leads-div">
      {
        props.leads.data !== undefined ?
        props.leads.data.map((lead, index) => (
          <Lead 
          key={index} 
          lead={lead} 
          setSelectedLead={props.setSelectedLead} 
          selectedLead={props.selectedLead} 
          selectLead={props.selectLead} 
          emptyLead="test" 
          deleteLead={props.deleteLead}/>
        ))
        : ""
      }
    </div>
  )
}

export default Leads
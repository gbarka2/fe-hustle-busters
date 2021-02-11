import React from 'react'
import Lead from './Lead'

const Leads = (props) => {
  
  return (
    <div className="leads-div">
      {
        props.leads.data !== undefined ?
        props.leads.data.map((lead, index) => (
          <Lead 
          key={index} 
          lead={lead} 
          selectedLead={props.selectedLead} 
          setSelectedLead={props.setSelectedLead} 
          deleteLead={props.deleteLead}/>
        ))
        : ""
      }
    </div>
  )
}

export default Leads
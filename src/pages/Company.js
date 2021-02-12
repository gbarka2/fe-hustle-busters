import React from "react"
import Leads from '../components/Leads'

const Company = (props) => {

  return(
      <div className="company-div">
        <h2 className="company-header">All Hustles</h2>
        <Leads 
        leads={props.leads} 
        setSelectedLead={props.setSelectedLead} 
        selectedLead={props.selectedLead} 
        deleteLead={props.deleteLead} />
      </div>
  )
}

export default Company
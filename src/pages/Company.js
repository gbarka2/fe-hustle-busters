import React from "react"
import Leads from '../components/Leads'

const Company = (props) => {

  return(
      <div className="company-div">
        <h1>COMPANY Component</h1>
        <Leads leads={props.leads} setSelectedLead={props.setSelectedLead} selectedLead={props.selectedLead} selectLead={props.selectLead} emptyLead={props.emptyLead} deleteLead={props.deleteLead}/>
      </div>
  )
}

export default Company
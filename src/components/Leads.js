import React from 'react'
import Lead from './Lead'

const Leads = ({leads}, props) => {

  // console.log('leads props', leads.data)
  return (
    <div className="leads-div">
      {
        leads.data !== undefined ?
        leads.data.map((lead, index) => (
          <Lead lead={lead} key={index} setSelectedLead={props.setSelectedLead} selectedLead={props.selectedLead} selectLead={props.selectLead} emptyLead={props.emptyLead} deleteLead={props.deleteLead}/>
        ))
        : ""
      }
    </div>
  )
}

export default Leads
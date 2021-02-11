import React from 'react'
import Lead from './Lead'

const Leads = (props) => {

  const url = "https://hustle-busters.herokuapp.com"
  console.log('leads props-', props)
  // console.log('leads props', leads.data)

  //DELETE A LEAD
  const deleteLead = (lead) => {
    fetch(url + '/leads/' + lead._id, {
      method: "delete"
    })
    .then((data) => {
      props.getLeads(data)
    })
  }

  return (
    <div className="leads-div">
      {
        props.leads.data !== undefined ?
        props.leads.data.map((lead, index) => (
          <Lead key={index} lead={lead} setSelectedLead={props.setSelectedLead} selectedLead={props.selectedLead} selectLead={props.selectLead} emptyLead="test" deleteLead={deleteLead}/>
        ))
        : ""
      }
    </div>
  )
}

export default Leads
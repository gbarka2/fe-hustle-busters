import React from 'react'
import Lead from './Lead'

const Leads = ({leads}) => {

  console.log('leads props', leads.data)
  return (
    <div className="leads-div">
      <div className="leads-table-header">
        <p>Company Name |</p>
        <p>Owner |</p>
        <p>Contact Name</p>
        <p>Email</p>
        <p>Active</p>
        <p>Status</p>
        <p>Division</p>
        <p>Estimated Revenue</p>
        <p>Actual Revenue</p>
        <p>Lead ID</p>
      </div>
      {
        leads.data !== undefined ?
        leads.data.map((lead, index) => (
          <Lead lead={lead} key={index} />
        ))
        : ""
      }
    </div>
  )
}

export default Leads
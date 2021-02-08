import React from 'react'
import Lead from './Lead'

const Leads = ({leads}) => {

  console.log('leads props', leads.data)
  return (
    <div className="leads-div">
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
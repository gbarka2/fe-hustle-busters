import React from 'react'
import {Link} from 'react-router-dom'

const Lead = (props) => {
  
  return (
    <div className="lead-div">
        <p className="lead-company-name">{props.lead.companyName}</p>
        <div className="lead-button-group">
          <Link to='/lead-edit'>
            <button className="lead-button-update" onClick={() => {props.setSelectedLead(props.lead)}}>
              Update
            </button>
          </Link>
          <button className="lead-button-delete" onClick={() => {props.deleteLead(props.lead)}}>Delete</button>
        </div>
    </div>
  )
}

export default Lead
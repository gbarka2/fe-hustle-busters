import React from 'react'
import Form from './Form'
import {Link} from 'react-router-dom'

const Lead = (props,) => {
  console.log(props)
  // props.setSelectedLead(props.emptyLead)
  console.log(props.selectedLead)

  const handleEditClick = (event) => {
    console.log('handle click', props.lead)
    props.selectLead(props.lead)
    // props.setSelectedLead(props.lead)
    props.history.push('/lead-edit')
  }

  return (
    <div className="lead-div">
        <p>{props.lead.companyName}</p>
        <div>
          <Link to='/lead-edit'>
            <button onClick={handleEditClick}>
              Edit Lead
            </button>
          </Link>
          {/* <button>See Profile</button> */}
          <button onClick={props.deleteLead}>Delete Lead</button>
        </div>

    </div>
  )
}

export default Lead
import React from 'react'
import Form from './Form'
import {Link} from 'react-router-dom'


const Lead = (props,) => {
  // console.log('lead props-', props.deleteLead)
  // console.log('lead props2-', props)


  // const handleDeleteClick = (event) => {
  //   console.log('handledeleteclick', props.lead._id)
  //   props.selectLead(props.lead)
  //   props.deleteLead(props.lead._id)
  // }

  return (
    <div className="lead-div">
        <p>{props.lead.companyName}</p>
        <div>
          <Link to='/lead-edit'>
            <button onClick={() => {props.setSelectedLead(props.lead)}}>
              Edit Lead
            </button>
          </Link>
          {/* <button>See Profile</button> */}
          <button onClick={() => {props.deleteLead(props.lead)}}>Delete Lead</button>
        </div>

    </div>
  )
}

export default Lead
import React from 'react'
import Form from './Form'
import {Link} from 'react-router-dom'

const Lead = (props,) => {
  console.log('lead props-',props)


  return (
    <div className="lead-div">
        <p>{props.lead.companyName}</p>
        <div>
          <Link to='/lead-edit'>
            <button onClick={props.handleSubmit}>
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
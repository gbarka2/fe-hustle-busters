import React from 'react'
import Form from './Form'
import {Link} from 'react-router-dom'

const Lead = (props) => {

  return (
    <div className="lead-div">
        <p>{props.lead.companyName}</p>
        <div>
          <Link to="lead-edit"><button>Edit Lead</button></Link>
          <button>See Profile</button>
        </div>
        {/* <p>{props.lead.owner}</p>
        <p>{props.lead.contactName}</p>
        <p>{props.lead.email}</p>
        <p>{props.lead.active}</p>
        <p>{props.lead.status}</p>
        <p>{props.lead.division}</p>
        <p>{props.lead.estimatedRevenue}</p>
        <p>{props.lead.actualRevenue}</p>
        <p>{props.lead._id}</p> */}
      {/* <Form /> */}
    </div>
  )
}

export default Lead
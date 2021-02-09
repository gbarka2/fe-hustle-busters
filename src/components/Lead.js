import React from 'react'
import Form from './Form'


const Lead = (props) => {

  return (
    
    <div className="lead-div">
                                            
        <p>{props.lead.companyName}</p><button onClick={() => { props.lead.owner()}} class="lead-profile">See<br></br> Profile</button>
        {/* <p>{props.lead.owner}</p> trying to work this out....
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
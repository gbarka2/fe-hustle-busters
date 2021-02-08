import React from 'react'
import Form from './Form'

const Lead = (props) => {

  return (
    <table className="lead-div">
      <tr>
        <th>Company Name</th>
        <th>Contact Name</th>
        <th>Actual Revenue</th>
      </tr>
      <tr>
        <td>{props.lead.contactName}</td>
        <td>{props.lead.companyName}</td>
      </tr>
      {/* <Form /> */}
    </table>
  )
}

export default Lead
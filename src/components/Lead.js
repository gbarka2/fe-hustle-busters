import React from 'react'
import Form from './Form'

const Lead = (props) => {

  return (
    <div className="lead-div">
      <p>{props.lead.contactName}</p>
      <Form />
    </div>
  )
}

export default Lead
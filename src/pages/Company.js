import React from "react"
import Leads from '../components/Leads'

const Company = (props) => {
  // console.log('company props', props.leads)
    return(
        <div className="company-div">
          <h1>COMPANY Component</h1>
          <Leads leads={props.leads}/>
        </div>
    )
}

export default Company
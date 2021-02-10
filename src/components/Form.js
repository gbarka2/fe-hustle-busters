import React from 'react'

const Form = (props) => {
  console.log('props from form', props)
  console.log("selectedLead", props.selectedLead)
  return (
    <div className="form-div">
      <form 
      // onSubmit="blank"
      >
        <input 
          type="text"
          name="companyName"
          placeholder={props.selectedLead.companyName}
          // onChange="blank"
        />
        <input 
          type="text"
          name="contactName"
          placeholder="Contact Name"
          // onChange="blank"
        />
        <input 
          type="text"
          name="phone"
          placeholder="Phone"
                    // onChange="blank"
        />
        <input 
          type="text"
          name="email"
          placeholder="Email"
                    // onChange="blank" 
        />        
        <input 
          type="text"
          name="status"
          placeholder="Status"
                    // onChange="blank" 
        />        
        <input 
          type="text"
          name="active"
          placeholder="Active"
                    // onChange="blank"  
        />
        <input 
          type="number"
          name="estimatedRevenue"
          placeholder="Estimated Revenue"
                    // onChange="blank"  
        />
        <input 
          type="number"
          name="actualRevenue"
          placeholder="Actual Revenue"
                    // onChange="blank"  
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
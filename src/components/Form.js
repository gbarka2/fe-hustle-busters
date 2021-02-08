import React from 'react'

const Form = (props) => {

  return (
    <div className="form-div">
      <form onSubmit="blank">
        <input 
          type="text"
          name="companyName"
          value="blank"
          onChange="blank"
        />
        <input 
          type="text"
          name="contactName"
          value="blank"
          onChange="blank" 
        />
        <input 
            type="text"
            name="contactTitle"
            value="blank"
            onChange="blank" 
        />
        <input 
          type="text"
          name="phone"
          value="blank"
          onChange="blank"
        />
        <input 
          type="text"
          name="email"
          value="blank"
          onChange="blank" 
        />
        <input 
          type="text"
          name="estimatedRevenue"
          value="blank"
          onChange="blank"  
        />
        <input 
          type="text"
          name="companyName"
          value="blank"
          onChange="blank"  
        />
        <input type="submit" value="blank" />
      </form>
    </div>
  )
}

export default Form
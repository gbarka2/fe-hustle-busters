import React from 'react'

const Form = (props) => {

  console.log('form props-', props)

  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.selectedLead)

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(formData)
    props.history.push('/all-leads')
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <label>Company Name</label>
        <input 
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <label>Contact Name</label>
        <input 
          type="text"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
        />
        <label>Phone</label>
        <input 
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label>Email</label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Email</label>        
        <input 
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
        /> 
        <label>Active</label>         
        <input 
          type="text"
          name="active"
          value={formData.active}
          onChange={handleChange}
        />
        <label>Estimated Revenue</label>  
        <input 
          type="number"
          name="estimatedRevenue"
          value={formData.estimatedRevenue}
          onChange={handleChange}
        />
        <label>Actual Revenue</label>  
        <input 
          type="number"
          name="actualRevenue"
          value={formData.actualRevenue}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
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
        <label className="form-label">Company Name</label>
        <input
          className="form-input" 
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <label className="form-label">Contact Name</label>
        <input
          className="form-input"  
          type="text"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
        />
        <label className="form-label">Phone</label>
        <input
          className="form-input"  
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label className="form-label">Email</label>
        <input
          className="form-input"  
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="form-label">Email</label>        
        <input
          className="form-input"  
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
        /> 
        <label className="form-label">Active</label>         
        <input
          className="form-input"  
          type="text"
          name="active"
          value={formData.active}
          onChange={handleChange}
        />
        <label className="form-label">Estimated Revenue</label>  
        <input
          className="form-input"  
          type="number"
          name="estimatedRevenue"
          value={formData.estimatedRevenue}
          onChange={handleChange}
        />
        <label className="form-label">Actual Revenue</label>  
        <input
          className="form-input"  
          type="number"
          name="actualRevenue"
          value={formData.actualRevenue}
          onChange={handleChange}
        />
        <input className="form-button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
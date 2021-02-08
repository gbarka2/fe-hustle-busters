import React from "react"



const Division = (props) => {
    const { divisions } = props;
    const { leads } = props    
    const loaded = () => (
        <>
        <div className="division-div">
        {divisions.map((division) => (
            <article key={division._id}>
         <h2>{division.name}</h2>
         <h3>{division.motto}</h3>
        <img src={division.img} alt='' />
        </article>
        ))}
     </div>
     
     <div className="leads-div">
      {leads.map((lead) => (
          <article key={lead._id}>
              <h2>{lead.companyName}</h2>
          </article>
      ))}
         
         
     </div>
         
     </>
         
)
   const loading = <h1>Loading...</h1>
    return divisions || leads ? loaded() : loading 
    
  
}

export default Division;
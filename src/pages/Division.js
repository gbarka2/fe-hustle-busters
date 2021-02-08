import React from "react"
import Leads from "../components/Leads"


const Division = (props) => {
    
    const { divisions } = props;
    
    const loaded = () => (
        <div className="division-div">
        {divisions.map((division) => (
            <article key={division._id}>
         <h2>{division.name}</h2>
         <h3>{division.motto}</h3>
        <img src={division.img} alt='' />   
        <Leads />
        </article>
        ))}
     </div>
)
   const loading = <h1>Loading...</h1>
    return divisions ? loaded() : loading
  
}

export default Division;
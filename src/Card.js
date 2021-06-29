import React from 'react'

const Card = (props) => {
   
    return (
      
            <div className="card">
                <div className="card-image"><img src={props.user.avatar} alt="" className="pic" /></div>
                <h3>{props.user.first_name} {" "} {props.user.last_name}</h3>
                <p>{props.user.email}</p>
            </div>
           

       
    )
}

export default Card

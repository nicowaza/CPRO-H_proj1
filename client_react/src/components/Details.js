import React from 'react'

const Details = (props) => {
   return (
      <div>
          <div className="card">
                <p className="card-text">{props.username}</p>
                <p className="card-text">{props.firstname}</p>
                <p className="card-text">{props.lastname}</p>
                <p className="card-text">{props.avatarUrl}</p>
                <p className="card-text">{props.city}</p>>
          </div>
      </div>
   )
}

export default Details
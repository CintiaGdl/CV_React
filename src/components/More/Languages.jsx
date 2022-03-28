import React from 'react'

export default function Languages({ languages }) {
  return (
    <div className='languages'>

        {languages.map((item) => {
            return (
                <div key={JSON.stringify(item)}>
                <h3>{item.language}</h3>
                <p>Written level: {item.wrlevel}</p>
                <p>Spoken level: {item.splevel}</p>
                </div>
            )
        })}
    </div>
  )
}



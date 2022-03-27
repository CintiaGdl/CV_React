import React from 'react'

export default function Habilities({ habilities }) {
  return (
      <div className='habilities'>
        {habilities.map((item) => {
            return(
                <div key={JSON.stringify(item)}>
                    <p>Habilities:</p>
                        <ul>
                            <li>{item}</li>
                        </ul>
                </div>
        )
    })}
    </div>
  )
}

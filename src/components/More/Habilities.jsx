import React from 'react'

export default function Habilities({ habilities }) {
  return (
      <div className='habilities'>
        {habilities.map((item) => {
            return(
                <div key={JSON.stringify(item)}>
                        <ul>
                            <li>{item}</li>
                        </ul>
                </div>
        )
    })}
    </div>
  )
}

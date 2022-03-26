import React from 'react'

export default function Education({ education }) {
  return (
    <div className='educationCard'>
        {education.map((item) => {
            return (
                <div key={JSON.stringify(item)}>
                    <p className='name'>{item.name}</p>
                    <p>{item.date}</p>
                    <p>{item.where}</p>
                </div>
            )
        })}
    </div>
  )
}



import React from 'react'

export default function Education({ education }) {
  return (
    <div className='sectionCard'>
        {education.map((item) => {
            return (
                <div key={JSON.stringify(item)}>
                    <h3 className='name'>{item.name}</h3>
                    <p>{item.date}</p>
                    <p>{item.where}</p>
                </div>
            )
        })}
    </div>
  )
}



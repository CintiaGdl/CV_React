import React from "react"

export default function Experience({ experience }) {
    return (
      <div className='sectionCard'>
          {experience.map((item) => {
              return (
                  <div key={JSON.stringify(item)}>
                      <h3 className='name'>{item.name}</h3>
                      <p>{item.date}</p>
                      <p>{item.where}</p>
                      <p>{item.description}</p>
                  </div>
              )
          })}
      </div>
    )
  }
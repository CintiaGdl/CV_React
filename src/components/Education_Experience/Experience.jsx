import React from "react"

export default function Experience({ experience }) {
    return (
      <div className='experienceCard'>
          {experience.map((item) => {
              return (
                  <div key={JSON.stringify(item)}>
                      <p className='name'>{item.name}</p>
                      <p>{item.date}</p>
                      <p>{item.where}</p>
                      <p>{item.description}</p>
                  </div>
              )
          })}
      </div>
    )
  }
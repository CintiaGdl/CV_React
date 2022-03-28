import React from 'react'

export default function About({ about }) {
    return (
        <div className='sectionCard'>
            {about.map((item, index) => {
                return (
                    <div key={index}>
                        <ul>
                            <li>{item.info}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

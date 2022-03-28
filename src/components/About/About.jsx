import React from 'react'

export default function About({ about }) {
    return (
        <div className='about'>
            {about.map((item, index) => {
                return (
                    <div key={index}>
                        {/* <h3>About me:</h3> */}
                        <ul>
                            <li>{item.info}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

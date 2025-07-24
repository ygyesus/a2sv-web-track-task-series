import React from 'react'
import { epilogue } from '../layout'
const AboutSection = ({ sectionName, sectionValue }) => {
    return (
        <div className='mb-4'>
            <p className={`${epilogue.className} text-base font-normal`}>{sectionName}</p>
            <p className={`${epilogue.className} text-base font-semibold`}>{sectionValue}</p>
        </div >
    )
}

export default AboutSection
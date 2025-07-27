import React from 'react'
import { epilogue } from '../layout'
const helper = (sectionValue) => {
    if (new Date(sectionValue).toLocaleString() === new Date("NON DATE").toLocaleString()) {
        return sectionValue
    }
    else {
        const options = {
            // weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        const newDate = new Date(sectionValue).toLocaleString("en-us", options)
        return newDate
    }
}
const AboutSection = ({ sectionName, sectionValue }) => {
    return (
        <div className='mb-4'>
            <p className={`${epilogue.className} text-base font-normal`}>{sectionName}</p>
            <p className={`${epilogue.className} text-base font-semibold`}>{

                // sectionValue.includes(":")
                //     ? sectionValue.slice(0, 10)
                //     : sectionValue
                helper(sectionValue)

            }</p>
        </div >
    )
}

export default AboutSection
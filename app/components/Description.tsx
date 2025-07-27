import React from 'react'
import { JobCardProps } from '../types/JobCardProps'
import { epilogue, poppins } from '../layout'
const Description = ({ description }: JobCardProps) => {
    return (
        <div>
            <h3 className={`${poppins.className} text-2xl`}>Description</h3>
            <p className={`${epilogue.className}`}>{description}</p>
        </div>
    )
}

export default Description
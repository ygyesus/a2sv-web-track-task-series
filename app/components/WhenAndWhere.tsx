import React from 'react'
import { JobCardProps } from '../types/JobCardProps'
import { poppins, epilogue } from '../layout'

const WhenAndWhere = ({ whenAndWhere }: JobCardProps) => {
    return (
        <div>
            <h3 className={`${poppins.className} text-2xl`}>When & Where</h3>
            <div className={`${epilogue.className}`}>{whenAndWhere}</div>
        </div>
    )
}

export default WhenAndWhere
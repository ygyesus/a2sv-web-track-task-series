import React from 'react'
import { JobCardProps } from '../types/JobCardProps'
import { poppins, epilogue } from '../layout'
import Location from './svg/Location'

const WhenAndWhere = ({ whenAndWhere }: JobCardProps) => {
    return (
        <div>
            <h3 className={`${poppins.className} text-2xl mb-2`}>When & Where</h3>

            <div className={`${epilogue.className} flex gap-4`}>
                <Location />
                <p className='mt-2'>{whenAndWhere}</p>
            </div>
        </div>
    )
}

export default WhenAndWhere
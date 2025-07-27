import React from 'react'
import { JobCardProps } from '../types/JobCardProps'
import { poppins, epilogue } from '../layout'
import CircularTick from './svg/CircularTick'

const Responsibilities = ({ responsibilities }: JobCardProps) => {
    const responsibilitiesArray = responsibilities.split('\n')
    return (
        <div>
            <h3 className={`${poppins.className} text-2xl`}>Responsibilities</h3>
            <ul>
                {

                    responsibilitiesArray.map(
                        responsibility =>
                            <li
                                key={crypto.randomUUID()}
                                className={`${epilogue.className} flex gap-2`}
                            ><CircularTick /> {responsibility}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Responsibilities
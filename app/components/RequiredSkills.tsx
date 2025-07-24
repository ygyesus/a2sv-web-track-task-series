import React from 'react'
import { Geist } from 'next/font/google'
const geist = Geist({
    subsets: ['latin'],
})
import { JobCardProps } from '../types/JobCardProps'
import { poppins, epilogue } from '../layout'
import Tag from './tags/Tag'

const RequiredSkills = ({ requiredSkills }: JobCardProps) => {
    return (
        <div className='py-4'>
            <h1 className={`${poppins.className} text-2xl mb-2`}>Required Skills</h1>
            <ul>
                {requiredSkills.map(requiredSkill =>
                    <Tag key={crypto.randomUUID()} className={`${poppins.className}`} text={requiredSkill}></Tag>
                )}
            </ul>

        </div >
    )
}

export default RequiredSkills
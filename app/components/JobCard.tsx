import React from 'react'
import Image from 'next/image'
import { JobCardProps } from '../types/JobCardProps'
import VerticalDivider from './VerticalDivider'

import Education from './tags/Education'
import InPerson from './tags/InPerson'
import IT from './tags/IT'
import Tag from './tags/Tag'


export const JobCard = ({ title, description, company, logoLink, location }: JobCardProps) => {
    return (
        <div className='flex flex-col max-w-9/12 border-1 border-gray-300 rounded-3xl m-4 px-5 py-5'>
            <div className='flex gap-4'>
                <img
                    src={logoLink}
                    alt={company}
                    width={200}
                    height={100}
                    className="object-none w-14 h-14 rounded-full custom-position"
                />

                <div>
                    <h3 className='text-lg font-bold'>{title}</h3>
                    <p className='text-base text-gray-400'>{company} <span className='mx-1'>•</span> {location}</p>
                    <p className='mt-5 text-md'>{description}</p>
                    <div className='mt-5 flex gap-2'>
                        <InPerson />
                        <VerticalDivider />
                        <Education />
                        <IT />

                    </div>
                </div>
            </div>




        </div>
    )
}

export default JobCard;

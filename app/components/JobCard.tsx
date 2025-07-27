'use client'
import React from 'react'
import Image from 'next/image'
import { JobCardProps } from '../types/JobCardProps'
import VerticalDivider from './VerticalDivider'

import Education from './tags/Education'
import InPerson from './tags/InPerson'
import IT from './tags/IT'
import Tag from './tags/Tag'

import Link from 'next/link'

import { useGetOpportunityByIdQuery } from '../service/opportunities'

import { epilogue } from '../layout'

export const JobCard = ({ title, description, orgName, logoUrl, location, id }: JobCardProps) => {
    const { data, isError, isLoading } = useGetOpportunityByIdQuery(id)
    if (isError) {
        return <h1> ERROR</h1>
    }
    if (isLoading) {
        return <div> Job Card loading...</div>
    }

    const job = data.data

    return (
        <Link href={{
            pathname: `/opportunities/${id}`
        }}
            className='flex flex-col border-1 border-gray-300 rounded-3xl px-5 py-5 mb-10'>
            <div className='flex gap-5'>
                <div className={`h-auto w-1/2 relative rounded-2xl overflow-hidden border-black`}>
                    <img
                        src={logoUrl}
                        alt={orgName}
                    />
                </div>

                <div className={`${epilogue.className}`}>
                    <h3 className='text-lg font-bold'>{title}</h3>
                    <p className='text-base text-gray-400'>{orgName} <span className='mx-1 text-lg font-semibold'>•</span> {location}</p>
                    <p className='mt-5 text-md'>{description}</p>
                    <div className='mt-5 flex gap-2'>
                        {job.opType === "inPerson" && <Tag key={crypto.randomUUID()} text={"In Person"} />}
                        {job.opType === "virtual" && <Tag key={crypto.randomUUID()} text={"Virtual"} />}
                        <VerticalDivider />
                        {
                            job.categories.map(category => <Tag key={crypto.randomUUID()} text={category} />)
                        }

                    </div>
                </div>
            </div>

        </Link>
    )
}

export default JobCard;

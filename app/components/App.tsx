// Client component that's shown at URL /opportunities/search

'use client'

import React from 'react'
import JobCard from './JobCard'
import { JobCardProps } from '../types/JobCardProps'
import { useGetAllOpportunitiesQuery } from '../service/opportunities'
import Dashboard from './Dashboard'
import { epilogue } from '../layout'
import { poppins } from '../layout'

const App = () => {
    const { data, isError, isLoading } = useGetAllOpportunitiesQuery("")

    if (isError) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <h1 className={`${poppins.className} text-2xl text-red-600 mb-4`}>Error Loading Opportunities</h1>
                    <p className={`${epilogue.className} text-gray-600`}>Please try refreshing the page or contact support if the problem persists.</p>
                </div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4640DE] mx-auto mb-4"></div>
                    <h1 className={`${poppins.className} text-xl text-gray-700`}>Loading Opportunities...</h1>
                </div>
            </div>
        )
    }
    const jobs = data.data


    return <div className='pt-16'>
        <div className="flex justify-between mb-10">
            <div>
                <h1 className={`${poppins.className} text-[32px]`}>Opportunities</h1>
                <p className={`${epilogue.className} text-[16px]`}>Showing {jobs?.length || 0} results</p>
            </div>
            <div className={`${epilogue.className} mt-5 text-[16px]`}><span className='mr-2 text-base text-gray-400'>Sort by:</span> <span className='mr-2'>Most relevant</span>
                <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 5.66663L8 10.3333L3.33333 5.66663" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.6667 5.66663L8 10.3333L3.33333 5.66663" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.6667 5.66663L8 10.3333L3.33333 5.66663" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
        {
            jobs.map(newJob => {
                const newJobCardProps: JobCardProps = {
                    id: newJob.id,
                    title: newJob.title,
                    description: newJob.description,
                    orgName: newJob.orgName,
                    logoUrl: newJob.logoUrl,
                    location: newJob.location,

                    responsibilities: newJob.responsibilities,
                    idealCandidate: newJob["idealCandidate"],
                    whenAndWhere: newJob["whenAndWhere"],
                    about: {
                        "posted_on": newJob.datePosted,
                        "deadline": newJob.deadline,
                        "location": newJob.location,
                        "start_date": newJob.startDate,
                        "end_date": newJob.endDate
                    },
                    // posted_on, deadline, location, start_date, end_date

                    categories: newJob.categories,
                    requiredSkills: newJob["requiredSkills"]
                }
                const {
                    title, description, orgName, logoUrl, location,
                    responsibilities, idealCandidate, whenAndWhere, about, categories, requiredSkills
                } = newJobCardProps
                console.log(newJobCardProps)
                return <JobCard key={crypto.randomUUID()}
                    title={title}
                    description={description}
                    orgName={orgName}
                    logoUrl={logoUrl}
                    location={location}
                    id={newJob.id}
                />
            })
        }
    </div>




}

export default App
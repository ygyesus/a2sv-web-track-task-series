'use client'
import { useGetOpportunityByIdQuery } from "@/app/service/opportunities";
import { JobCardProps } from "@/app/types/JobCardProps";
import Dashboard from "@/app/components/Dashboard";
import { poppins, epilogue } from "@/app/layout";

const Job = ({ opportunityId }: { opportunityId: string }) => {
    const { data, isError, isLoading } = useGetOpportunityByIdQuery(opportunityId)

    if (isError) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <h1 className={`${poppins.className} text-2xl text-red-600 mb-4`}>Error Loading Job Details</h1>
                    <p className={`${epilogue.className} text-gray-600`}>Please try refreshing the page or go back to the job listings.</p>
                </div>
            </div>
        )
    }
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4640DE] mx-auto mb-4"></div>
                    <h1 className={`${poppins.className} text-xl text-gray-700`}>Loading Job Details...</h1>
                </div>
            </div>
        )
    }

    const newJob = data.data
    console.log(newJob)

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

    return <Dashboard
        description={description}
        responsibilities={responsibilities}
        idealCandidate={idealCandidate}
        whenAndWhere={whenAndWhere}
        about={about}
        categories={categories}
        requiredSkills={requiredSkills}
    />
}

export default Job
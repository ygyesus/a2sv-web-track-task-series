'use client'
import { useGetOpportunityByIdQuery } from "@/app/service/opportunities";
import { JobCardProps } from "@/app/types/JobCardProps";
import Dashboard from "@/app/components/Dashboard";

const Job = ({ opportunityId }) => {
    const { data, isError, isLoading } = useGetOpportunityByIdQuery(opportunityId)

    if (isError) {
        return <h1> ERROR LOADING THIS JOB</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
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
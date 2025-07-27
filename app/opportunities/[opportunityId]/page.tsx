import Job from "./Job";
export default async function JobDetails({
    params,
}: {
    params: Promise<{ opportunityId: string }>;
}) {
    const opportunityId = (await params).opportunityId
    return <Job opportunityId={opportunityId} />
}
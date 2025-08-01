import Job from "./Job";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function JobDetails({ params }: { params: { opportunityId: string } }) {
    const session = await getServerSession(options);
    const opportunityId = params.opportunityId;

    if (!session) {
        redirect(`/signup?callbackUrl=/opportunities/${encodeURIComponent(opportunityId)}`);
    }
    return <Job opportunityId={opportunityId} />;
}
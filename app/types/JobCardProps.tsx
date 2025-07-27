interface JobCardProps {
    id: string,
    title: string,
    description: string,
    responsibilities: string,
    orgName: string,
    logoUrl: string,
    location: Array<string>,
    idealCandidate: Object,
    whenAndWhere: string,
    about: Object,
    categories: Array<string>,
    requiredSkills: Array<string>
}

export type { JobCardProps }
interface JobCardProps {
    title: string,
    description: string,
    company: string,
    logoLink: string,
    location: string,
    responsibilities: Array<string>,
    idealCandidate: Object,
    whenAndWhere: string,
    about: Object,
    categories: Array<string>,
    requiredSkills: Array<string>
}

export type { JobCardProps }
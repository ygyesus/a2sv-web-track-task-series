import Image from "next/image";
import JobCard from "./components/JobCard";
import { type JobCardProps } from "./types/JobCardProps";
import { promises as fs } from 'fs';
import Dashboard from "./components/Dashboard";


export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/jobs.json', 'utf8');
  const data = JSON.parse(file);
  const newJob = data["job_postings"][0]
  const newJobCardProps: JobCardProps = {
    title: newJob.title,
    description: newJob.description,
    company: newJob.company,
    logoLink: newJob.image,
    location: newJob.about.location,

    responsibilities: newJob.responsibilities,
    idealCandidate: newJob["ideal_candidate"],
    whenAndWhere: newJob["when_where"],
    about: newJob.about,
    categories: newJob.about.categories,
    requiredSkills: newJob.about["required_skills"]
  }
  const {
    title, description, company, logoLink, location,
    responsibilities, idealCandidate, whenAndWhere, about, categories, requiredSkills
  } = newJobCardProps
  return (
    <>

      <JobCard
        title={title}
        description={description}
        company={company}
        logoLink={logoLink}
        location={location}
      />
      <Dashboard
        description={description}
        responsibilities={responsibilities}
        idealCandidate={idealCandidate}
        whenAndWhere={whenAndWhere}
        about={about}
        categories={categories}
        requiredSkills={requiredSkills}
      />
    </>
  );
}

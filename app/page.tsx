import Image from "next/image";
import JobCard from "./components/JobCard";
import { type JobCardProps } from "./types/JobCardProps";
import logo from '../public/logo.png';


export default function Home() {

  const newJobCardProps: JobCardProps = {
    title: "Social Media Assistant",
    description: "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers. Your primary goal will be to enhance brand visibility, foster positive relationships with the audience, and drive engagement and conversions.",
    company: "Yenigat Birhan NonProfit Organization",
    logoLink: "/logo.png",
    location: "Addis Ababa, Ethiopia"
  }
  const { title, description, company, logoLink, location } = newJobCardProps
  return (
    <JobCard title={title}
      description={description}
      company={company}
      logoLink={logoLink}
      location={location}
    />
  );
}

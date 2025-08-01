import Image from "next/image";
import JobCard from "../../components/JobCard";
import { type JobCardProps } from "../../types/JobCardProps";
import { promises as fs } from 'fs';
import Dashboard from "../../components/Dashboard";
import { useGetAllOpportunitiesQuery } from "../../service/opportunities";
import { ReduxProvider } from "../../service/ReduxProvider";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import App from "../../components/App";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Home = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/signup?callbackUrl=/opportunities/search");
  }
  return <App />;
};

export default Home;

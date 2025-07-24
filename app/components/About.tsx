import React from 'react'
import { JobCardProps } from '../types/JobCardProps'
import { poppins, epilogue } from '../layout'

import Deadline from './svg/Deadline'
import EndDate from './svg/EndDate'
import Location from './svg/Location'
import PostedOn from './svg/PostedOn'
import StartDate from './svg/StartDate'
import AboutSection from './AboutSection'

const About = ({ about }: JobCardProps) => {
    return (
        <>
            <h3 className={`${poppins.className} text-2xl`}>About</h3>
            <ul className='py-4'>
                <li className={`${poppins.className} flex gap-4`}>
                    <PostedOn />
                    <AboutSection
                        sectionName={"Posted On: "}
                        sectionValue={about["posted_on"]} />
                </li>
                <li className={`${poppins.className} flex gap-4`}>
                    <Deadline />
                    <AboutSection
                        sectionName={"Deadline: "}
                        sectionValue={about["deadline"]} />
                </li>
                <li className={`${poppins.className} flex gap-4`}>
                    <Location />
                    <AboutSection
                        sectionName={"Location: "}
                        sectionValue={about["location"]} />
                </li>
                <li className={`${poppins.className} flex gap-4`}>
                    <StartDate />
                    <AboutSection
                        sectionName={"Start Date: "}
                        sectionValue={about["start_date"]} />
                </li>
                <li className={`${poppins.className} flex gap-4`}>
                    <EndDate />
                    <AboutSection
                        sectionName={"End Date: "}
                        sectionValue={about["end_date"]} />
                </li>
            </ul>
        </>
    )
}

export default About
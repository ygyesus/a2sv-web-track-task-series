// Renders Dashboard for a specific job with details such as Description, Responsibilities, and When and Where to apply
import React from 'react'

import Description from './Description'
import Responsibilities from './Responsibilities'
import IdealCandidate from './IdealCandidate'
import WhenAndWhere from './WhenAndWhere'
import About from './About'
import Categories from './Categories'
import RequiredSkills from './RequiredSkills'
import { JobCardProps } from '../types/JobCardProps'

const Dashboard = ({ description, responsibilities, idealCandidate, whenAndWhere, about, categories, requiredSkills }: JobCardProps) => {
    return (
        <div className='grid grid-cols-4 gap-8 text-lg my-8'>
            <div className='col-span-3 pt-16 flex flex-col gap-16'>
                <Description description={description} />
                <Responsibilities responsibilities={responsibilities} />
                <IdealCandidate idealCandidate={idealCandidate} />
                <WhenAndWhere whenAndWhere={whenAndWhere} />
            </div>

            <div>
                <About about={about} />
                <hr className='border-gray-400' />
                <Categories categories={categories} />
                <hr className='border-gray-400' />
                <RequiredSkills requiredSkills={requiredSkills} />
            </div>
        </div>
    )
}

export default Dashboard
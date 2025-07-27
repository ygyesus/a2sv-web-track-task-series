import React from 'react'
import { JobCardProps } from '../types/JobCardProps'

import { poppins, epilogue } from '../layout'
const IdealCandidate = ({ idealCandidate }: JobCardProps) => {
    console.log("IDEALCANDIDATE")
    console.log(idealCandidate)
    return (
        <div>
            <h3 className={`${poppins.className} text-2xl`}>Ideal Candidate we want</h3>
            <ul>
                {/* <li key="ageAndGender"
                    className={`${epilogue.className} list-disc ml-8`}>
                    {idealCandidate["age"]} {idealCandidate["gender"]}
                </li>

                {idealCandidate["traits"].map(trait => {
                    const [preColon, postColon] = trait.split(':')

                    return <li key={crypto.randomUUID()} className={`${epilogue.className} list-disc ml-8`}>
                        <strong>{preColon + ':'}</strong>{postColon}
                    </li>

                }
                )} */}
                <p>{idealCandidate}</p>
            </ul>
        </div>
    )
}

export default IdealCandidate
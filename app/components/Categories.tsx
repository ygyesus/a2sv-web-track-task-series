import React from 'react'
import { JobCardProps } from '../types/JobCardProps'
import { poppins, epilogue } from '../layout'
import Marketing from './tags/Marketing'
import Design from './tags/Design'

const Categories = ({ categories }: JobCardProps) => {
    return (
        <div className='py-4'>
            <h3 className={`${poppins.className} text-2xl my-2`}>Categories</h3>
            <ul>
                {categories.map(category =>
                    category ===
                        "Marketing" ? <Marketing key={crypto.randomUUID()} />
                        : <Design key={crypto.randomUUID()} />
                )}
            </ul>
        </div >
    )
}

export default Categories
import React from 'react'

const Tag = ({ text }: { text: string }) => {
    return (
        <button
            className='rounded-full py-1 px-2 text-sm font-semibold tracking-wider cursor-pointer border-1 min-w-15'
        >{text}</button>
    )
}

export default Tag
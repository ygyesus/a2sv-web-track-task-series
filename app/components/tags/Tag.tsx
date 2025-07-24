import React from 'react'

const Tag = ({ text, key }: { text: string, key: string }) => {
    return (
        <button key={key}
            className=' mr-2 mb-2 py-1 px-2 text-sm tracking-wider cursor-pointer min-w-15 text-violet-600 bg-violet-100'
        >{text}</button>
    )
}

export default Tag
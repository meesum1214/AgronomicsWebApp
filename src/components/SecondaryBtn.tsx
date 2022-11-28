import React, { ReactChild } from 'react'

const SecondaryBtn = ({children}: {children: ReactChild}) => {
    return (
        <div className="flex justify-center items-center hover:scale-105 transition-all bg-secondary h-8 text-xs text-white rounded-full" style={{width: '90px'}}>{children}</div>
    )
}

export default SecondaryBtn
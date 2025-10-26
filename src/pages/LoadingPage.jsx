import React from 'react'
import './LoadingPage.css'

const LoadingPage = () => {
    return (
        <>
            <div className="landing-page flex flex-col items-center py-40 h-screen">
                <div className="logo">
                    <img src="/logo.png" alt="BeeStack" className="w-20 h-20" />
                </div>
                <div className="name text-4xl py-5" >
                    <h1>BeeStack</h1>
                </div>
                <div className="loader my-20"></div>
            </div>
        </>
    )
}

export default LoadingPage

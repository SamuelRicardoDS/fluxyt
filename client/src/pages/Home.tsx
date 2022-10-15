import LandingPage  from '../assets/LandingPage.jpg'
import { Footer } from '../components/Footer'
import { useState } from 'react'

export const Home = () => {

    const handleClick = () => {
        window.location.href = "/login"
    }

    return (
        <div className="flex flex-col w-screen h-screen">
            <h1 className="text-center">fluxy</h1>
            <div className="p-3">
                <button  onClick={() => handleClick()} className='bg-slate-300 p-2 border'>Fazer Cadastro</button>
                <button className='bg-slate-300 p-2 border'>Fazer Login</button>
            </div>
           {/*  <div className=" absolute right-0">
                <img src={LandingPage} />
            </div> */}
            <Footer />
        </div>
    )
} 
import LandingPage  from '../assets/LandingPage.jpg'
import { Footer } from '../components/Footer'
import { useState } from 'react'

export const Home = () => {

    const handleRegisterClick = () => {
        window.location.href = "/cadastro"
    }

    const handleLoginClick = () => {
        window.location.href = "/login"
    }

    return (
        <div className="flex flex-col w-screen h-screen">
            <div className="flex flex-row p-3">
            <h1 className="text-center">Fluxy</h1>
                <div className="absolute right-0 ">
                    <button  onClick={() => handleRegisterClick()} className='p-2 mr-2 border-b-2 border-black hover:shadow-lg drop-shadow-md'>Fazer Cadastro</button>
                    <button onClick={() => handleLoginClick()}  className='p-2 mr-2 border-b-2 border-black hover:shadow-lg drop-shadow-md'>Fazer Login</button>
                </div>
            </div>
            <div className="place-items-center items-center text-center">
                <h1 className="text-4xl">Não sabe quando vai se formar?</h1>
                <p className="text-xl">Mais um problema que resolvemos para você</p>
            </div>
           {/*  <div className=" absolute right-0">
                <img src={LandingPage} />
            </div> */}
            <Footer />
        </div>
    )
} 
import LandingPage  from '../assets/LandingPage.jpg'
import { Footer } from '../components/Footer'

export const Home = () => {
    const handleClick = () => {
        window.location.href = "/login"
    }

    return (
        <div className="flex flex-col w-screen h-screen">
            <h1 className="text-center">fluxy</h1>
            <div>
                <button  onClick={() => handleClick()} className='bg-slate-300 p-2'>Entrar</button>
            </div>
            <div className=" absolute right-0">
                <img src={LandingPage} />
            </div>
            <Footer />
        </div>
    )
} 
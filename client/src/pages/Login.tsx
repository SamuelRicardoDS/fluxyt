import axios from "axios";
import { useState } from "react";
import { Footer } from "../components/Footer";


export const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

    const handleBackClick = () => {
            window.location.href = "/"
        }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log({email, password})
        axios.post('http://localhost:3333/login', {email: email, password: password}).then(() => {
            console.log("deu bom")
        }).catch(() =>{
            console.log("deu ruim")
        })
    }

    return (
        <div>
            <form action=""  onSubmit={handleSubmit}  className="flex flex-col w-1/4 items-center bg-slate-500 p-5 mt-3">
                <input type="email"  onChange={(e) => setEmail(e.target.value)} placeholder="email" className="mt-2"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="senha" className="mt-2"/>
                <button>Entrar</button>
            </form>
            <button onClick={() => handleBackClick()} className="bg-slate-500 text-white p-2 mt-2">Voltar</button>
         
        </div>
    )
}
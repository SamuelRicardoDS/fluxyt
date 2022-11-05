import axios from 'axios';
import React, { useState } from 'react';
import gregothinking from '../assets/gregothinking.jpg';

export const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log({ name, email, password });
        axios.post('http://localhost:3333/users', { name: name, email: email, password: password }).then(() => {
            console.log("correto");
        }).catch(() => {
            console.log("erro");
        })
    }

    const handleBack = () => {
        window.location.href = "/"
    }

    return (
        <div className="flex flex-col justify-center items-center bg-black h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col w-1/4 items-center rounded-2xl  bg-stone-800 p-5">
                <h1 className='text-white'>Preencha os dados</h1>
                    <input type="text" placeholder="nome" onChange={(e) => setName(e.target.value)} className="mt-2 rounded-lg border"/>
                    <input type="email" placeholder="email" onChange ={(e) =>setEmail(e.target.value)} className="mt-2 rounded-lg border"/>
                    <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} className="mt-2 rounded-lg border"/>
                    <button className="bg-stone-900 text-white p-2 mt-2 rounded-2xl">Registrar</button>
            </form> 
            <div className='items-center'>
            <button onClick={() => handleBack()} className="bg-stone-500 rounded-2xl text-white p-2 mt-2">Voltar</button>
            </div>
            <div>
                <img  className='bottom-0 left-0 absolute' src={gregothinking} alt="" />
            </div>
            
        </div>
    )
}
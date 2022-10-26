import axios from 'axios';
import React, { useState } from 'react';

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
        <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col w-1/4 items-center bg-slate-400 p-5 mt-3">
                <h1>registro</h1>
                    <input type="text" placeholder="nome" onChange={(e) => setName(e.target.value)} className="mt-2"/>
                    <input type="email" placeholder="email" onChange ={(e) =>setEmail(e.target.value)}className="mt-2"/>
                    <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} className="mt-2"/>
                    <button className="bg-slate-500 text-white p-2 mt-2">Registrar</button>
            </form> 
            <button onClick={() => handleBack()} className="bg-slate-500 text-white p-2 mt-2">Voltar</button>
            
        </div>
    )
}
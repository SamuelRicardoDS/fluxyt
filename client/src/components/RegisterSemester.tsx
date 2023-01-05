import Cursos from '../data/cursos.json'
import { useState } from 'react';

export const RegisterSemester = () => {
    const handleclick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("clicou")
        setSemester(semester + 1)
    }

    const [semester, setSemester] = useState(1)

    return(
        <div className="flex justify-center">
            <form action="" className="border flex flex-col w-1/4 p-5">
                <h1>Semestre a ser cadastrado: {semester}</h1>
                <div className="flex flex-row justify-evenly">
                    <select name="" id="">
                        <option selected disabled={true}>selecione uma materia</option>
                        {
                            Cursos.map((curso) => curso.materias[1].obrigatorias.map((obrigatoria) => <option value={obrigatoria}>{obrigatoria}</option>))
                        }
                    </select>
                    <button>mais</button>
                </div>
                <input type="text" placeholder="ira"/>
                <button onClick={(e) => handleclick(e)}>cadastrar semestre</button>

            </form>
        </div>
    )
}
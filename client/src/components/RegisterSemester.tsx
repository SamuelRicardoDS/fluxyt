import Cursos from '../data/cursos.json'
import { useState } from 'react';

export const RegisterSemester = () => {
    const handleRegister = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("clicou")
        setSemester(semester + 1)
    }

    const [semester, setSemester] = useState<number>(1)
    const [selectedCourseIndex, setSelectedCourseIndex] = useState<number>(0)


    return(
        <div className="flex justify-center">
            <form action="" className="border flex flex-col w-1/4 p-5">
                <h1>Semestre a ser cadastrado: {semester}</h1>
                <div className="flex flex-row justify-evenly">
                    <select name="" id="">
                        <option selected disabled={true}>selecione uma materia</option>
                        {
                            Cursos[selectedCourseIndex].materias[semester - 1].obrigatorias.map((obrigatoria) => <option value={obrigatoria}>{obrigatoria}</option>)
                        }
                    </select>
                    <button>mais</button>
                </div>
                <input type="text" placeholder="ira"/>
                <button onClick={(e) => handleRegister(e)}>cadastrar semestre</button>

            </form>
        </div>
    )
}
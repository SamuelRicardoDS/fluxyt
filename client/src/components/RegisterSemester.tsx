import Cursos from '../data/cursos.json'
import { useState } from 'react';

export const RegisterSemester = () => {
    const handleRegister = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("clicou")
        setSemester(semester + 1)
    }

    const handleDone = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setMaterias([...materias,selectedCourse])
    }

    const [selectedCourse, setSelectedCourse] = useState("")
    const [semester, setSemester] = useState<number>(1)
    const [selectedCourseIndex, setSelectedCourseIndex] = useState<number>(0)
    const [materias, setMaterias] = useState<string[]>([])

    return(
        <div className="flex justify-center">
            <form action="" className="border flex flex-col w-1/4 p-5">
                <h1>Semestre a ser cadastrado: {semester}</h1>
                <div className="flex flex-row justify-evenly">
                    <select name="" id="" onChange={(e) => setSelectedCourse(e.target.value)}>
                        <option selected disabled={true}>selecione uma materia</option>
                        {
                            Cursos[selectedCourseIndex].materias[semester - 1].obrigatorias.map((obrigatoria) => <option value={obrigatoria}>{obrigatoria}</option>)
                        }
                    </select>
                    <button onClick={(e) => handleDone(e)}>Fiz</button>
                </div>
                <table className=''>
                    <thead>
                        <tr>
                            <th>materia</th>
                            <th>menção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {materias.map((selecionada) => <th>{selecionada}</th>)}
                            <th>SR</th>
                        </tr>
                    </tbody>
                </table>
                <button onClick={(e) => handleRegister(e)}>Cadastrar Semestre</button>

            </form>
        </div>
    )
}
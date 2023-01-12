import Cursos from '../data/cursos.json'
import { useState } from 'react';

export const RegisterSemester = () => {

    interface materias {
        name: string,
        mention: string,
    }

    const handleRegister = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("clicou")
        setSemester(semester + 1)
    }

    const handleDone = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setMaterias([...materias, {name: selectedCourse, mention: selectedMention}])
    }

    const [selectedCourse, setSelectedCourse] = useState("")
    const [selectedMention, setSelectedMention] = useState("")
    const [semester, setSemester] = useState<number>(1)
    const [selectedCourseIndex, setSelectedCourseIndex] = useState<number>(0)
    const [materias, setMaterias] = useState<materias[]>([])

    return(
        <div className="flex justify-center">
            <form action="" className="border flex flex-col w-1/4 p-5">
                <h1 className='flex justify-center'>Semestre a ser cadastrado: {semester}</h1>
                <div className="flex flex-row justify-evenly">
                    <div className='flex flex-col'>
                        <select name="" id="" onChange={(e) => setSelectedCourse(e.target.value)}>
                            <option selected disabled={true}>selecione uma materia</option>
                            {
                                Cursos[selectedCourseIndex].materias[semester - 1].obrigatorias.map((obrigatoria) => <option value={obrigatoria}>{obrigatoria}</option>)
                            }
                        </select>
                        <select name="" id="" onChange={(e) => setSelectedMention(e.target.value)}>
                            <option selected disabled={true}>selecione sua menção</option>
                            <option value={"SS"}>SS</option>
                            <option value={"MS"}>MS</option>
                            <option value={"MM"}>MM</option>
                            <option value={"MI"}>MI</option>
                            <option value={"SR"}>SR</option>
                        </select>
                    </div>
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
                            {materias.map((selecionada) => <tr><th>{selecionada.name}</th><th>{selecionada.mention}</th></tr>)}
                    </tbody>
                </table>
                <button onClick={(e) => handleRegister(e)}>Cadastrar Semestre</button>

            </form>
        </div>
    )
}
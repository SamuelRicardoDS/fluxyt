import Cursos from '../data/cursos.json'

export const RegisterSemester = () => {
    const handleclick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("clicou")
    }

    return(
        <div className="flex justify-center">
            <form action="" className="border flex flex-col w-1/4 p-5">
                <select name="semester" id="">
                    <option value="">1</option>
                </select>
                <div className="flex flex-row justify-evenly">
                    <select name="" id="">
                        <option selected disabled={true}>selecione uma materia</option>
                        {
                            Cursos.map((curso)=> (<option value={curso.materias[1].obrigatorias}>{curso.materias[1].obrigatorias}</option>))
                        }
                    </select>
                    <button onClick={(e) => handleclick(e)}>mais</button>
                </div>
                <input type="text" placeholder="ira"/>
            </form>
        </div>
    )
}
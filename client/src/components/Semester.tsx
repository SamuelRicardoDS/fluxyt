
interface SemesterProps {
    data: {
        period : number,
        materias: string[],
    }
}
export const Semester = ({data}: SemesterProps) => {
    return(
        <div className="border border-gray-700 p-5">
            <div>
                {data.period}
            </div>
            <div>
                {data.materias.map((materia) => <div>{materia}</div>)}
            </div>
        </div>
    )
}
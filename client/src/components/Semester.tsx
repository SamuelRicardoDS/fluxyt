
interface SemesterProps {
    data: {
        period : number,
        materias: string[],
        ira: number,
    }
}
export const Semester = ({data}: SemesterProps) => {
    return(
        <div>
            <div>
                {data.period}
            </div>
            <div>
                {data.ira}
            </div>
            <div>
                {data.materias.map((materia) => <div>{materia}</div>)}
            </div>
        </div>
    )
}
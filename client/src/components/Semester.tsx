
interface SemesterProps {
    data: {
        period : number,
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
        </div>
    )
}
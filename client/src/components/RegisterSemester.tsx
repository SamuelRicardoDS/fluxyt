export const RegisterSemester = () => {
    const handleclick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("clicou")
    }

    return(
        <div className="flex justify-center">
            <form action="" className="border flex flex-col w-1/4 p-5">
                <input type="text" placeholder="número do semestre"/>
                <div className="flex flex-row justify-evenly">
                    <select name="" id="">
                        <option value="calculo">calculo</option>
                    </select>
                    <button onClick={(e) => handleclick(e)}>mais</button>
                </div>
                <input type="text" placeholder="ira"/>
            </form>
        </div>
    )
}
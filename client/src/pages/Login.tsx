

export const Login = () => {
     const handleBackClick = () => {
            window.location.href = "/"
        }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("submit")
    }

    return (
        <div>
            <form action=""  onSubmit={handleSubmit}  className="flex flex-col w-1/4 items-center bg-slate-500 p-5 mt-3">
                <input type="email" placeholder="email" className="mt-2"/>
                <input type="password" placeholder="senha" className="mt-2"/>
                <button>Entrar</button>
            </form>
            <button onClick={() => handleBackClick()} className="bg-slate-500 text-white p-2 mt-2">Voltar</button>
        </div>
    )
}
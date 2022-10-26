export const HomeHeader = () => {
  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  return (
    <div className=" text-white bg-[#111] pb-3">
      <div className="flex flex-row p-3">
        <h1 className="text-center">Fluxy</h1>
        <div className="absolute right-0 ">
          <button
            onClick={() => handleRegisterClick()}
            className="p-2 mr-2 border-b-2 border-black hover:shadow-lg drop-shadow-md"
          >
            Fazer Cadastro
          </button>
          <button
            onClick={() => handleLoginClick()}
            className="p-2 mr-2 border-b-2 border-black hover:shadow-lg drop-shadow-md"
          >
            Fazer Login
          </button>
        </div>
      </div>
    </div>
  );
};

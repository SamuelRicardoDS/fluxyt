import { RegisterSemester } from "../components/RegisterSemester";
import { Semester } from "../components/Semester";

export const Main = () => {
  return (
    <div>
      <h1>Engenharia de software unb</h1>
        <RegisterSemester />
      <div className="flex flex-row justify-between p-5">
        <Semester data={{period: 1, materias: ["Calculo", "ial"],ira:2}}/>
      </div>
    </div>  
  );
};

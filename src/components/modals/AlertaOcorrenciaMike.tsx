import { useContext } from "react";
import rightarrow from "../../assets/rightarrow.svg";
import { ModalContext } from "../ModalContext";

export default function AlertaOcorrenciaMike() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ButtonComponent must be used within a StateProvider");
  }
  const { handleShow } = context;

  return (
    
      <div className="lg:flex lg:justify-center">
        <div className="rounded-xl drop-shadow-md bg-white h-64 mx-auto">
          <div className="flex flex-col min-h-full items-center justify-center p-4 text-center gap-4">
            <div className="">
              <h1 className="text-xl font-bold">ALERTA DE OCORRÊNCIA</h1>
            </div>
            <div>
              <p>Exemplo</p>
            </div>
            <div>
              <p>
                <a href="">Ver mais</a>
              </p>
            </div>
            <div>
              <button
                className="text-center bg-bluemike text-lg text-white rounded-xl h-[50] w-max px-8 py-4"
                onClick={handleShow}
              >
                A CAMINHO
                <img
                  className="pl-4 inline-block fill-white"
                  src={rightarrow}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
}

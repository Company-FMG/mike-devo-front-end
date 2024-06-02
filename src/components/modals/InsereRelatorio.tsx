import Modal from "../global/Modal";

export default function InsereRelatorio(){
    return(
        <Modal>
            <div className="w-80 space-y-3">
                <h2 className="text-2xl font-bold">Por favor, insira o relatório da ocorrência.</h2>
                <textarea name="" id="" className="bg-white rounded-lg border border-black w-full h-20"></textarea>
                <div className="flex">
                    <button className="text-center text-xl p-2 rounded-xl h-14 w-32">
                        Voltar
                    </button>
                    <button className="text-center bg-bluemike text-xl text-white p-2 rounded-xl h-14 w-32">
                        Confirmar
                    </button>
                </div>
            </div>
        </Modal>
    );   
};
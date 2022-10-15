import { useState } from 'react'
import Modal from 'react-modal'
import { GranolaModal } from './GranolaModal';

Modal.setAppElement('#root')

export const Footer = () => {
    const [isGranolaModalOpen, setIsGranolaModalOpen] = useState(false);

    const handleOpenGranolaModal = () => {
      setIsGranolaModalOpen(true);
    };
  
    const handleCloseGranolaModal = () => {
      setIsGranolaModalOpen(false);
    };

    return (
        <div className="flex flex-col items-center bg-slate-200 text-white p-1 absolute w-screen bottom-0">
            <button onClick={handleOpenGranolaModal}  className='text-center items-center'>developed by GraCompany</button>
            <GranolaModal isOpen={isGranolaModalOpen} onRequestClose={handleCloseGranolaModal}/>
        </div>
    )
}
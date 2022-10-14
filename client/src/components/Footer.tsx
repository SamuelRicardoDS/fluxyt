import { useState } from 'react'
import Modal from 'react-modal'

export const Footer = () => {

    const [isGranolaModalOpen, setIsGranolaModalOpen] = useState(false)

    const handleOpenGranolaModal = () => {
        setIsGranolaModalOpen(true)
    }

    const handleCloseGranolaModal = () => {
        setIsGranolaModalOpen(false)
    }

    return (
        <div className="flex flex-col items-center bg-slate-500 text-white p-1 absolute w-screen bottom-0">
            <button onClick={handleOpenGranolaModal}  className='text-center items-center'>developed by GraCompany</button>
            <Modal 
            isOpen={isGranolaModalOpen}
            onRequestClose={handleCloseGranolaModal}>
                <h1>Gra Company</h1>
            </Modal>
        </div>
    )
}
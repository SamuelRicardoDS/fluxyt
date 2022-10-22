import Modal from "react-modal";
import { useState } from "react";
import  qrCodePix  from "../assets/qrCodePix.jpg";

interface GranolaModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const GranolaModal = ({ isOpen, onRequestClose }: GranolaModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          position: "fixed",
          zIndex: 1020,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          background: "white",
          width: "43rem",
          overflowY: "auto",
          position: "relative",
          border: "1px solid #ccc",
          borderRadius: "0.45rem",
          padding: "2rem",
        },
      }}
    >
      <h1 className="text-xl font-medium">Gra Company</h1>
      <p className="text-md text-gray-700">
        A GraCompany é uma corporação idealizada por 11 engenheiros de software
        <br /> com a finalidade de revolucionar o mundo a partir da tecnologia.
      </p>
      <div className="mt-2 text-lg">
        <p className="text-gray-700">
          A nossa iniciativa acadêmica possibilida um maior entendimento e facilidade
          para com as demandas universitárias.
        </p>
        <p>Curtiu o propósito? ajude a ideia a sobreviver com um pix</p>
        <img src={qrCodePix} alt="" className="w-1/4 h-1/4"/>
      </div>
    </Modal>
  );
};

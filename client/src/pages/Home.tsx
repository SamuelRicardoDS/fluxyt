import LandingPage from "../assets/LandingPage.jpg";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { HomeContent } from "../components/HomeContent";
import { HomeHeader } from "../components/HomeHeader";

export const Home = () => {
  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <HomeHeader />
      <div className="place-items-center items-center text-center text-white bg-black p-3">
        <h1 className="text-4xl">Não sabe quando vai se formar?</h1>
        <p className="text-xl">Mais um problema que resolvemos para você</p>
      </div>
      <HomeContent />
    </div>
  );
};

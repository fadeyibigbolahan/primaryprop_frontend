import React from "react";
import { wallets } from "../constants";
import { useNavigate } from "react-router-dom";

const WalletGrid = () => {
  const navigate = useNavigate();

  const handleWalletClick = (wallet) => {
    // Navigate to the wallet's page or perform any action you want
    navigate(`/wallet/${wallet.id}`);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 md:gap-10 gap-5 p-4">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            onClick={() => handleWalletClick(wallet)}
            className="flex flex-col items-center justify-center md:gap-4 gap-1 rounded-xl shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
          >
            <div className="bg-white flex justify-center items-center p-2 rounded-lg mb-1">
              <img
                src={wallet.img}
                alt={wallet.title}
                className="w-[50px] h-[50px] mb-2"
              />
            </div>
            <span className="text-[12px] md:text-[16px] text-center font-medium text-white">
              {wallet.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletGrid;

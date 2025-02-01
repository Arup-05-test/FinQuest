"use client"
import  { useState } from 'react';
import { ethers } from 'ethers';
import { useContext } from 'react';
import Web3Context  from '@/context/web3Context';  // Import your context here

const MintNft = () => {
    const [isLoading, setIsLoading] = useState(false);  // To show loading state during minting
    const { contractInstance1,selectedAccount } = useContext(Web3Context);  

    const handleMintNft = async () => {
        if (!selectedAccount) {
            alert("Please connect your wallet first.");
            return;
        }

        const contract = contractInstance1;
        const tokenURI = "https://white-elderly-worm-49.mypinata.cloud/ipfs/bafkreihpjutx73vdda5vdwbt6wczamdz3qdk4kkodhnfnfwbbmthmvj7ga";
        const mintPrice = ethers.parseEther("0.01");  

        try {
            setIsLoading(true);

            const tx = await contract.mintNFT(tokenURI, {
                value: mintPrice,  
            });

            // Wait for the transaction to be mined
            await tx.wait();

            alert("NFT minted successfully!");
        } catch (error) {
            console.error("Error minting NFT:", error);
            alert("Minting failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Click below to get your certificate NFT
            </h3>
            <button
                onClick={handleMintNft}
                disabled={isLoading}
                className={`px-8 py-4 text-white rounded-lg shadow-lg transition-all duration-300 transform ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'}`}
            >
                {isLoading ? "Minting..." : "Click me"}
            </button>
        </div>
    );
    
};

export default MintNft;

"use client";
import { useState, useContext, useEffect } from "react";
import Web3Context from "@/context/web3Context";
import { ethers } from "ethers";

const GamePoints = () => {
    const { contractInstance2, selectedAccount } = useContext(Web3Context);
    const [pointsAmount, setPointsAmount] = useState(0);
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [gamePointPrice, setGamePointPrice] = useState("0");
    const [newPrice, setNewPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (selectedAccount) {
            fetchGamePointPrice();
        }
    }, [selectedAccount]);

    const buyGamePoints = async () => {
        if (!selectedAccount) {
            alert("Please connect your wallet first.");
            return;
        }
        try {
            setIsLoading(true);
            const price = await contractInstance2.gamePointPrice(); // price per point in Wei
            const totalPrice = price * BigInt(pointsAmount);

            const tx = await contractInstance2.buyGamePoints(pointsAmount, { value: totalPrice });
            await tx.wait();
            alert("Game points purchased successfully!");
            // fetchPurchaseHistory();
        } catch (error) {
            console.error("Error purchasing game points:", error);
            alert("Purchase failed.");
        } finally {
            setIsLoading(false);
        }
    };

    const collectGamePoints = async () => {
        if (!selectedAccount) {
            alert("Please connect your wallet first.");
            return;
        }
        try {
            setIsLoading(true);
            const tx = await contractInstance2.collectGamePoints(selectedAccount);
            await tx.wait();
            alert("Game points collected successfully!");
            // fetchPurchaseHistory();
        } catch (error) {
            console.error("Error collecting game points:", error);
            alert("Collection failed.");
        } finally {
            setIsLoading(false);
        }
    };

    // const fetchPurchaseHistory = async () => {
    //     if (!selectedAccount) return;
    //     try {
    //         const history = await contractInstance2.getPurchaseHistory(selectedAccount);
    //         setPurchaseHistory(
    //             history.map((purchase) => ({
    //                 gamePoints: purchase.gamePoints.toString(),
    //                 pricePaid: ethers.formatEther(purchase.pricePaid),
    //                 timestamp: new Date(purchase.timestamp * 1000).toLocaleString(),
    //                 collected: purchase.collected,
    //             }))
    //         );
    //     } catch (error) {
    //         console.error("Error fetching purchase history:", error);
    //     }
    // };

    const fetchGamePointPrice = async () => {
        try {
            const price = await contractInstance2.gamePointPrice();
            setGamePointPrice(ethers.formatEther(price));
        } catch (error) {
            console.error("Error fetching game point price:", error);
        }
    };

    const updateGamePointPrice = async () => {
        if (!newPrice) return;
        try {
            setIsLoading(true);
            const tx = await contractInstance2.setGamePointPrice(ethers.parseEther(newPrice));
            await tx.wait();
            alert("Game point price updated!");
            fetchGamePointPrice();
        } catch (error) {
            console.error("Error updating price:", error);
            alert("Update failed.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 font-sans">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Game Points Purchase</h1>

            {/* Buy Game Points Section */}
            <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-700 mb-4">Buy Game Points</h3>
                <div className="flex items-center space-x-4">
                    <input
                        type="number"
                        placeholder="Amount"
                        value={pointsAmount}
                        onChange={(e) => setPointsAmount(Number(e.target.value))}
                        className="p-3 border border-gray-300 rounded-lg text-lg w-40"
                    />
                    <button
                        onClick={buyGamePoints}
                        className={`px-6 py-3 text-white rounded-lg ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? "Purchasing..." : "Buy Points"}
                    </button>
                </div>
            </div>

            {/* Collect Game Points Section */}
            <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-700 mb-4">Collect Purchased Game Points</h3>
                <button
                    onClick={collectGamePoints}
                    className={`px-6 py-3 text-white rounded-lg ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                    disabled={isLoading}
                >
                    {isLoading ? "Collecting..." : "Collect Points"}
                </button>
            </div>

            {/* Purchase History Section */}
            {/* <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-700 mb-4">View Purchase History</h3>
                <button onClick={fetchPurchaseHistory} className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Fetch History
                </button>
                <ul className="mt-4 space-y-4">
                    {purchaseHistory.length > 0 ? (
                        purchaseHistory.map((purchase, index) => (
                            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                {purchase.gamePoints} points | {purchase.pricePaid} ETH | {purchase.timestamp} |{" "}
                                {purchase.collected ? "Collected" : "Pending"}
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">No purchase history found.</p>
                    )}
                </ul>
            </div> */}

            {/* Game Point Price Section */}
            <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-700 mb-4">Game Point Price: {gamePointPrice} ETH</h3>
                <button onClick={fetchGamePointPrice} className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                    Refresh Price
                </button>
            </div>

            {/* Update Game Point Price Section */}
            <div>
                <h3 className="text-xl font-medium text-gray-700 mb-4">Update Game Point Price (Admin Only)</h3>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="New Price in ETH"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg text-lg w-40"
                    />
                    <button
                        onClick={updateGamePointPrice}
                        className={`px-6 py-3 text-white rounded-lg ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? "Updating..." : "Update Price"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GamePoints;

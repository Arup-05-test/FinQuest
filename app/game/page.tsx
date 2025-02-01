"use client"

import { useState, useEffect } from "react"
import { Coins, DollarSign, TrendingUp, TrendingDown } from "lucide-react"

type Investment = {
  name: string
  price: number
  trend: "up" | "down"
}

const initialInvestments: Investment[] = [
  { name: "Tech Stock", price: 100, trend: "up" },
  { name: "Green Energy", price: 75, trend: "up" },
  { name: "Real Estate", price: 200, trend: "down" },
  { name: "Cryptocurrency", price: 50, trend: "down" },
]

export default function FinancialGame() {
  const [balance, setBalance] = useState(1000)
  const [investments, setInvestments] = useState<Investment[]>(initialInvestments)
  const [portfolio, setPortfolio] = useState<Record<string, number>>({})

  useEffect(() => {
    const timer = setInterval(() => {
      setInvestments((prevInvestments) =>
        prevInvestments.map((inv) => ({
          ...inv,
          price: Math.max(1, inv.price + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10)),
          trend: Math.random() > 0.5 ? "up" : "down",
        })),
      )
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const buyInvestment = (investment: Investment) => {
    if (balance >= investment.price) {
      setBalance((prev) => prev - investment.price)
      setPortfolio((prev) => ({
        ...prev,
        [investment.name]: (prev[investment.name] || 0) + 1,
      }))
    }
  }

  const sellInvestment = (investment: Investment) => {
    if (portfolio[investment.name] > 0) {
      setBalance((prev) => prev + investment.price)
      setPortfolio((prev) => ({
        ...prev,
        [investment.name]: prev[investment.name] - 1,
      }))
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text">Investment Game</h1>
      <div className="text-2xl font-semibold mb-8 flex items-center justify-center bg-white p-4 rounded-xl shadow-md animate-fadeIn">
        <Coins className="mr-2 text-accent" size={24} />
        Balance: ${balance.toFixed(2)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 animate-slideIn" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Market</h2>
          {investments.map((inv) => (
            <div key={inv.name} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md">
              <div>
                <h3 className="font-semibold text-lg">{inv.name}</h3>
                <p className="flex items-center text-gray-600">
                  <DollarSign size={18} />
                  {inv.price.toFixed(2)}
                  {inv.trend === "up" ? (
                    <TrendingUp className="ml-2 text-green-500" />
                  ) : (
                    <TrendingDown className="ml-2 text-red-500" />
                  )}
                </p>
              </div>
              <div>
                <button
                  onClick={() => buyInvestment(inv)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-green-600 transition-colors"
                >
                  Buy
                </button>
                <button
                  onClick={() => sellInvestment(inv)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="animate-slideIn" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Your Portfolio</h2>
          {Object.entries(portfolio).map(([name, quantity]) => (
            <div key={name} className="mb-4 p-4 bg-white rounded-xl shadow-md">
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-gray-600">Quantity: {quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


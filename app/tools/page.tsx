"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"

export default function Tools() {
  const [income, setIncome] = useState("")
  const [expenses, setExpenses] = useState("")
  const [savings, setSavings] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const calculateBudget = (e: React.FormEvent) => {
    e.preventDefault()
    const incomeNum = Number.parseFloat(income)
    const expensesNum = Number.parseFloat(expenses)
    const savingsNum = Number.parseFloat(savings)

    if (isNaN(incomeNum) || isNaN(expensesNum) || isNaN(savingsNum)) {
      setResult("Please enter valid numbers for all fields.")
      return
    }

    const totalExpenses = expensesNum + savingsNum
    if (totalExpenses > incomeNum) {
      setResult(
        "Your expenses and savings exceed your income. Consider reducing expenses or finding ways to increase your income.",
      )
    } else {
      const remaining = incomeNum - totalExpenses
      setResult(
        `Great job! You have $${remaining.toFixed(2)} left after expenses and savings. Consider allocating this to additional savings or investments.`,
      )
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text">Practical Tools</h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-6 flex items-center text-primary">
          <Calculator className="mr-2" size={24} />
          Budget Calculator
        </h2>
        <form onSubmit={calculateBudget} className="space-y-4">
          <div>
            <label htmlFor="income" className="block mb-1 text-gray-600">
              Monthly Income ($)
            </label>
            <input
              type="number"
              id="income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="expenses" className="block mb-1 text-gray-600">
              Monthly Expenses ($)
            </label>
            <input
              type="number"
              id="expenses"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="savings" className="block mb-1 text-gray-600">
              Monthly Savings Goal ($)
            </label>
            <input
              type="number"
              id="savings"
              value={savings}
              onChange={(e) => setSavings(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Calculate Budget
          </button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-indigo-50 rounded-md animate-slideIn">
            <p className="text-gray-700">{result}</p>
          </div>
        )}
      </div>
    </div>
  )
}


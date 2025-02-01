"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const modules = [
  {
    title: "Banking Basics",
    description:
      "Learn how to open and manage bank accounts, understand different types of accounts, and use online banking safely.",
    lessons: ["Types of Bank Accounts", "How to Open a Bank Account", "Online Banking Safety"],
  },
  {
    title: "Budgeting 101",
    description: "Master the art of creating and sticking to a budget, track your expenses, and set financial goals.",
    lessons: ["Creating a Budget", "Tracking Expenses", "Setting Financial Goals"],
  },
  {
    title: "Savings Strategies",
    description:
      "Discover various savings methods, understand compound interest, and learn how to save for short-term and long-term goals.",
    lessons: ["Savings Account Types", "The Power of Compound Interest", "Saving for Goals"],
  },
  {
    title: "Credit and Debt",
    description:
      "Understand how credit works, learn about different types of debt, and discover strategies for managing and reducing debt.",
    lessons: ["Understanding Credit Scores", "Types of Loans", "Debt Management Strategies"],
  },
  {
    title: "Investing Basics",
    description:
      "Learn about different investment options, understand risk and return, and discover how to start investing wisely.",
    lessons: ["Types of Investments", "Risk and Return", "Creating an Investment Plan"],
  },
]

export default function Modules() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text">Learning Modules</h1>
      <div className="space-y-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="p-6 flex justify-between items-center cursor-pointer"
              onClick={() => setExpandedModule(expandedModule === index ? null : index)}
            >
              <h2 className="text-xl font-semibold text-primary">{module.title}</h2>
              {expandedModule === index ? (
                <ChevronUp className="text-gray-500" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </div>
            {expandedModule === index && (
              <div className="p-6 bg-indigo-50 animate-slideIn">
                <p className="mb-4 text-gray-600">{module.description}</p>
                <h3 className="font-semibold mb-2 text-secondary">Lessons:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex}>{lesson}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


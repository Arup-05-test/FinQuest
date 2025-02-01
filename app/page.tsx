"use client"
import Link from "next/link"
import Image from "next/image"
import { Coins, Trophy, Users } from "lucide-react"
import heroImage from '@/lib/assests/heropic.webp'


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Welcome to FinQuest</h1>
        <p className="text-xl text-gray-300">Embark on an epic financial adventure in Roblox!</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={heroImage}
            alt="FinQuest Game Screenshot"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl animate-float"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Master Your Finances in a Virtual World</h2>
          <p className="text-lg mb-6 text-gray-300">
            Join thousands of players in FinQuest, the ultimate Roblox game that teaches you real-world financial skills
            while you have fun!
          </p>
          <Link href="https://www.roblox.com/games/97741331707461/FinQuest" target="_blank" rel="noopener noreferrer">
            <button className="game-button text-white font-bold py-3 px-8 rounded-full text-lg">
              Play FinQuest Now!
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <Coins className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Learn to Earn</h3>
          <p className="text-gray-400">
            Master the art of budgeting, saving, and investing in a fun, interactive environment.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Compete & Achieve</h3>
          <p className="text-gray-400">
            Challenge your friends and climb the leaderboard as you build your financial empire.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <Users className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
          <p className="text-gray-400">
            Join a vibrant community of learners and share your financial wisdom with others.
          </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 gradient-text">What You'll Learn in FinQuest</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Budgeting",
            "Saving",
            "Investing",
            "Credit Management",
            "Entrepreneurship",
            "Stock Market",
            "Real Estate",
            "Crypto",
          ].map((topic, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">{topic}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Start Your Financial Journey?</h2>
        <p className="text-lg mb-6 text-gray-300">
          Join thousands of players who are learning real-world financial skills while having a blast in Roblox!
        </p>
        <Link href="https://www.roblox.com/games/your-game-id" target="_blank" rel="noopener noreferrer">
          <button className="game-button text-white font-bold py-3 px-8 rounded-full text-lg">Launch FinQuest</button>
        </Link>
      </div>
    </div>
  )
}


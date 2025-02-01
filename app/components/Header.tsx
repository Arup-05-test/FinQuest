import Link from "next/link"
import { Home, GamepadIcon, BookOpen, Trophy } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            FinQuest
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Home className="mr-1" size={18} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.roblox.com/games/97741331707461/FinQuest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <GamepadIcon className="mr-1" size={18} />
                <span>Play Now</span>
              </Link>
            </li>
            <li>
              <Link href="/nftStore" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <BookOpen className="mr-1" size={18} />
                <span>Collect NFT</span>
              </Link>
            </li>
            <li>
              <Link href="/coinStore" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Trophy className="mr-1" size={18} />
                <span>Get Assets</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}


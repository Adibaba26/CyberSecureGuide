import { Link } from "wouter";
import { Shield, Lightbulb, HelpCircle, Images, Book, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 page-transition">
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <i className="fas fa-graduation-cap text-white text-4xl"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to CyberAware</h2>
        <p className="text-gray-600 mb-8">Learn to stay safe online with interactive lessons, quizzes, and resources.</p>
      </div>

      <div className="space-y-4">
        <Link href="/tips">
          <div className="nav-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <Lightbulb className="text-green-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Cyber Tips</h3>
                <p className="text-sm text-gray-500">Essential security practices</p>
              </div>
              <i className="fas fa-chevron-right text-gray-400 ml-auto"></i>
            </div>
          </div>
        </Link>

        <Link href="/quiz">
          <div className="nav-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <HelpCircle className="text-orange-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Cyber Quiz</h3>
                <p className="text-sm text-gray-500">Test your knowledge</p>
              </div>
              <i className="fas fa-chevron-right text-gray-400 ml-auto"></i>
            </div>
          </div>
        </Link>

        <Link href="/posters">
          <div className="nav-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <Images className="text-purple-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Safety Posters</h3>
                <p className="text-sm text-gray-500">Visual awareness materials</p>
              </div>
              <i className="fas fa-chevron-right text-gray-400 ml-auto"></i>
            </div>
          </div>
        </Link>

        <Link href="/resources">
          <div className="nav-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <Book className="text-red-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Resources</h3>
                <p className="text-sm text-gray-500">External learning materials</p>
              </div>
              <i className="fas fa-chevron-right text-gray-400 ml-auto"></i>
            </div>
          </div>
        </Link>

        <Link href="/trends">
          <div className="nav-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-indigo-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Cyber Trends</h3>
                <p className="text-sm text-gray-500">Latest security developments</p>
              </div>
              <i className="fas fa-chevron-right text-gray-400 ml-auto"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

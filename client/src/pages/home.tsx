import { Link } from "wouter";
import { Shield, Lightbulb, HelpCircle, Images, Book, TrendingUp, Heart, Info, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 page-transition">
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <i className="fas fa-graduation-cap text-white text-4xl"></i>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Welcome to SecureLearn</h2>
        <p className="text-muted-foreground mb-8">Learn to stay safe online with interactive lessons, quizzes, and resources.</p>
      </div>

      <div className="space-y-4">
        <Link href="/tips">
          <div className="nav-card rounded-xl p-6 shadow-lg cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <Lightbulb className="text-green-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Cyber Tips</h3>
                <p className="text-sm text-muted-foreground">Essential security practices</p>
              </div>
              <i className="fas fa-chevron-right text-muted-foreground ml-auto"></i>
            </div>
          </div>
        </Link>

        <Link href="/quiz">
          <div className="nav-card rounded-xl p-6 shadow-lg cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <HelpCircle className="text-orange-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Cyber Quiz</h3>
                <p className="text-sm text-muted-foreground">Test your knowledge</p>
              </div>
              <i className="fas fa-chevron-right text-muted-foreground ml-auto"></i>
            </div>
          </div>
        </Link>

        <Link href="/posters">
          <div className="nav-card rounded-xl p-6 shadow-lg cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <Images className="text-purple-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Safety Posters</h3>
                <p className="text-sm text-muted-foreground">Visual awareness materials</p>
              </div>
              <i className="fas fa-chevron-right text-muted-foreground ml-auto"></i>
            </div>
          </div>
        </Link>

        <Link href="/resources">
          <div className="nav-card rounded-xl p-6 shadow-lg cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <Book className="text-red-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Resources</h3>
                <p className="text-sm text-muted-foreground">External learning materials</p>
              </div>
              <i className="fas fa-chevron-right text-muted-foreground ml-auto"></i>
            </div>
          </div>
        </Link>

        <Link href="/trends">
          <div className="nav-card rounded-xl p-6 shadow-lg cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-indigo-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Cyber Trends</h3>
                <p className="text-sm text-muted-foreground">Latest security developments</p>
              </div>
              <i className="fas fa-chevron-right text-muted-foreground ml-auto"></i>
            </div>
          </div>
        </Link>

        <Link href="/foundations">
          <div className="nav-card rounded-xl p-6 shadow-lg cursor-pointer touch-feedback">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <Heart className="text-red-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Education Foundations</h3>
                <p className="text-sm text-muted-foreground">Support Pakistani NGOs</p>
              </div>
              <i className="fas fa-chevron-right text-muted-foreground ml-auto"></i>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-2 gap-4">
          <Link href="/donation-info">
            <div className="nav-card rounded-xl p-4 shadow-lg cursor-pointer touch-feedback">
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Info className="text-blue-500 h-5 w-5" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm">Donation Guide</h3>
                <p className="text-xs text-muted-foreground">How to donate</p>
              </div>
            </div>
          </Link>

          <Link href="/contact">
            <div className="nav-card rounded-xl p-4 shadow-lg cursor-pointer touch-feedback">
              <div className="text-center">
                <div className="w-10 h-10 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Phone className="text-green-500 h-5 w-5" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm">Contact</h3>
                <p className="text-xs text-muted-foreground">Get in touch</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

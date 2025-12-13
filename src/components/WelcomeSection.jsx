import { useUser } from "@clerk/clerk-react";
import { SparklesIcon, VideoIcon, Share2Icon, MessageSquareIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative">
      <div className="backdrop-blur-xl bg-base-100/70 rounded-2xl border border-white/10 shadow-2xl p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            {/* User Avatar and Welcome */}
            <div className="flex items-center gap-4 mb-6">
              {user?.imageUrl ? (
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-70"></div>
                  <img 
                    src={user.imageUrl} 
                    alt={user.firstName}
                    className="relative w-16 h-16 rounded-full border-4 border-base-100"
                  />
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-70"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {user?.firstName?.[0] || "U"}
                  </div>
                </div>
              )}
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <SparklesIcon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Welcome back</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {user?.firstName || "Coder"}!
                </h1>
                <p className="text-base-content/70 mt-2">
                  Ready to level up your coding skills today?
                </p>
              </div>
            </div>

            {/* Feature Stats in horizontal layout */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <VideoIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-base-content">HD Video</div>
                  <div className="text-sm text-base-content/60">Real-time communication</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                  <Share2Icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-base-content">Screen Share</div>
                  <div className="text-sm text-base-content/60">Live demonstration</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center">
                  <MessageSquareIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-lg font-bold text-base-content">Live Chat</div>
                  <div className="text-sm text-base-content/60">Instant messaging</div>
                </div>
              </div>
            </div>
          </div>

          {/* Create Session Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button
              onClick={onCreateSession}
              className="relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Start New Session</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
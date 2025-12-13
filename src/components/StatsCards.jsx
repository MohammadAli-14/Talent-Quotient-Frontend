import { UsersIcon, TrophyIcon, TrendingUpIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <>
      {/* Active Sessions Card */}
      <div className="card group relative overflow-hidden bg-gradient-to-br from-base-100 to-base-200 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="card-body relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl backdrop-blur-sm">
              <UsersIcon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-success">LIVE</span>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {activeSessionsCount}
            </div>
            <div className="text-sm font-medium text-base-content/90">Active Sessions</div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-base-content/60">
            <TrendingUpIcon className="w-4 h-4 text-success" />
            <span>Join a session now</span>
          </div>
        </div>
      </div>

      {/* Total Sessions Card */}
      <div className="card group relative overflow-hidden bg-gradient-to-br from-base-100 to-base-200 border border-white/10 hover:border-secondary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="card-body relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl backdrop-blur-sm">
              <TrophyIcon className="w-7 h-7 text-secondary" />
            </div>
            <div className="badge badge-secondary badge-outline">Total</div>
          </div>
          
          <div className="mb-2">
            <div className="text-4xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {recentSessionsCount}
            </div>
            <div className="text-sm font-medium text-base-content/90">Total Sessions</div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-base-content/60">
            <TrendingUpIcon className="w-4 h-4 text-success" />
            <span>Your coding journey</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsCards;
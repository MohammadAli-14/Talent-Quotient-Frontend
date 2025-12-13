import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
  ClockIcon,
  TrendingUpIcon,
  RefreshCwIcon,
} from "lucide-react";
import { Link } from "react-router";
import { getDifficultyBadgeClass } from "../lib/utils";
import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

function ActiveSessions({ sessions, isLoading, isUserInSession, onRefresh, lastUpdated }) {
  const [refreshing, setRefreshing] = useState(false);
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(true);
  const [timeSinceUpdate, setTimeSinceUpdate] = useState("just now");

  // Handle manual refresh
  const handleRefresh = async () => {
    if (refreshing || !onRefresh) return;
    
    setRefreshing(true);
    try {
      await onRefresh();
    } catch (error) {
      console.error("Refresh failed:", error);
    } finally {
      setTimeout(() => setRefreshing(false), 500); // Small delay for visual feedback
    }
  };

  // Update time since last update every 10 seconds
  useEffect(() => {
    const updateTimeSince = () => {
      if (lastUpdated) {
        const timeAgo = formatDistanceToNow(new Date(lastUpdated), { addSuffix: true });
        setTimeSinceUpdate(timeAgo);
      } else {
        setTimeSinceUpdate("just now");
      }
    };
    
    updateTimeSince(); // Initial call
    const interval = setInterval(updateTimeSince, 10000); // Update every 10 seconds
    
    return () => clearInterval(interval);
  }, [lastUpdated]);

  // Auto-refresh every 30 seconds when enabled
  useEffect(() => {
    if (!autoRefreshEnabled || !onRefresh || isLoading) return;

    const autoRefreshInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        onRefresh();
      }
    }, 30000); // 30 seconds

    return () => clearInterval(autoRefreshInterval);
  }, [autoRefreshEnabled, isLoading, onRefresh]);

  // Format time for display
  const getFormattedTime = () => {
    if (!lastUpdated) return "just now";
    
    const now = new Date();
    const lastUpdate = new Date(lastUpdated);
    const diffInSeconds = Math.floor((now - lastUpdate) / 1000);
    
    if (diffInSeconds < 5) return "just now";
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 120) return "1 minute ago";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 7200) return "1 hour ago";
    return formatDistanceToNow(lastUpdate, { addSuffix: true });
  };

  return (
    <div className="card bg-base-100/80 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="card-body p-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-base-300/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary rounded-xl blur opacity-30"></div>
              <div className="relative p-2 bg-gradient-to-br from-primary to-secondary rounded-xl">
                <ZapIcon className="size-5 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-base-content">Live Sessions</h2>
              <p className="text-sm text-base-content/60">Join real-time coding collaborations</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-success">
                {sessions.length} active
              </span>
            </div>
            <button 
              onClick={handleRefresh} 
              disabled={refreshing || isLoading}
              className="btn btn-ghost btn-sm btn-square relative group"
              title="Refresh sessions"
            >
              <RefreshCwIcon className={`size-4 ${refreshing ? 'animate-spin' : ''}`} />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-base-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {refreshing ? 'Refreshing...' : 'Refresh sessions'}
              </div>
            </button>
          </div>
        </div>

        {/* SESSIONS LIST */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="relative mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur"></div>
                <LoaderIcon className="relative size-12 animate-spin text-primary" />
              </div>
              <p className="text-base-content/70">Loading live sessions...</p>
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="group relative overflow-hidden rounded-xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200 hover:from-base-200 hover:to-base-300 transition-all duration-300"
              >
                {/* Hover Effect Line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5">
                  {/* SESSION INFO */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-4">
                      {/* AVATAR */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="relative size-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <Code2Icon className="size-7 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 size-5 bg-success rounded-full border-2 border-base-100 flex items-center justify-center">
                          <div className="size-1.5 bg-white rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* DETAILS */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-lg truncate group-hover:text-primary transition-colors">
                            {session.problem}
                          </h3>
                          <span
                            className={`badge badge-sm font-semibold ${getDifficultyBadgeClass(
                              session.difficulty
                            )}`}
                          >
                            {session.difficulty.slice(0, 1).toUpperCase() +
                              session.difficulty.slice(1)}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-base-content/70">
                          <div className="flex items-center gap-1.5">
                            <div className="p-1 bg-primary/10 rounded">
                              <CrownIcon className="size-3" />
                            </div>
                            <span className="font-medium truncate max-w-[120px]">
                              {session.host?.name || "Unknown"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="p-1 bg-secondary/10 rounded">
                              <UsersIcon className="size-3" />
                            </div>
                            <span>{session.participant ? "2/2" : "1/2"}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="p-1 bg-accent/10 rounded">
                              <TrendingUpIcon className="size-3" />
                            </div>
                            <span>• {session.difficulty.toLowerCase()} level</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* JOIN BUTTON */}
                  <div className="flex flex-col items-end gap-2 sm:self-center">
                    {session.participant && !isUserInSession(session) ? (
                      <div className="flex flex-col items-end gap-1">
                        <button className="btn btn-error btn-sm opacity-90" disabled>
                          Full
                        </button>
                        <span className="text-xs text-error/70">Session occupied</span>
                      </div>
                    ) : (
                      <Link 
                        to={`/session/${session._id}`} 
                        className="relative group/btn"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover/btn:opacity-50 transition-opacity duration-300"></div>
                        <button className="relative btn btn-primary btn-sm gap-2 whitespace-nowrap">
                          {isUserInSession(session) ? "Rejoin" : "Join"}
                          <ArrowRightIcon className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="relative mx-auto mb-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center">
                  <SparklesIcon className="w-12 h-12 text-primary/50" />
                </div>
              </div>
              <p className="text-xl font-semibold text-base-content mb-2">No active sessions yet</p>
              <p className="text-base-content/60 mb-6 max-w-md mx-auto">
                Be the pioneer! Start the first coding session and collaborate with fellow developers.
              </p>
            </div>
          )}
        </div>

        {/* FOOTER - Now with real functionality */}
        <div className="mt-6 pt-4 border-t border-base-300/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-base-content/60">
            <div className="flex items-center gap-2">
              <ClockIcon className="size-4" />
              <span>Updated {getFormattedTime()}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div 
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${autoRefreshEnabled ? 'bg-success' : 'bg-base-300'}`}
                  onClick={() => setAutoRefreshEnabled(!autoRefreshEnabled)}
                  title={autoRefreshEnabled ? "Auto-refresh enabled" : "Auto-refresh disabled"}
                />
                <span className="text-sm">
                  Auto-refresh {autoRefreshEnabled ? 'on' : 'off'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveSessions;
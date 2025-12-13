import { Code2, Clock, Users, Loader, CheckCircle, Zap } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router";

function RecentSessions({ sessions, isLoading, activeSessions, isUserInSession }) {
  // Combine and sort sessions by date (newest first)
  const allSessions = [...(sessions || [])].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // Take only the most recent 4-5 sessions
  const displaySessions = allSessions.slice(0, 5);

  return (
    <div className="card bg-base-100/80 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="card-body p-6">
        {/* HEADER */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent to-secondary rounded-xl blur opacity-30"></div>
                <div className="relative p-2 bg-gradient-to-br from-accent to-secondary rounded-xl">
                  <Clock className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-base-content">Recent Activity</h2>
                <p className="text-sm text-base-content/60">Your session history</p>
              </div>
            </div>
            
            {/* Quick Stats */}
            {activeSessions?.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-success">
                  {activeSessions.length} active
                </span>
              </div>
            )}
          </div>
          
          {/* Description */}
          <p className="text-sm text-base-content/70 bg-base-200/50 p-3 rounded-lg mb-4">
            Shows your recent coding sessions including active and completed ones
          </p>
        </div>

        {/* SESSIONS LIST */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-full blur"></div>
                <Loader className="relative w-10 h-10 animate-spin text-accent" />
              </div>
              <p className="text-base-content/70">Loading your activity...</p>
            </div>
          ) : displaySessions.length > 0 ? (
            displaySessions.map((session) => {
              const isActive = session.status === "active";
              const isInSession = isUserInSession?.(session);
              const isCompleted = session.status === "completed" || session.status === "ended";
              
              return (
                <div
                  key={session._id}
                  className={`group relative overflow-hidden rounded-xl border ${
                    isActive
                      ? "border-success/30 bg-gradient-to-br from-success/10 to-success/5"
                      : "border-base-300 bg-gradient-to-br from-base-100 to-base-200"
                  } hover:scale-[1.005] transition-all duration-300`}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      {/* SESSION ICON */}
                      <div className={`relative flex-shrink-0 ${
                        isActive
                          ? "bg-gradient-to-br from-success to-success/70"
                          : "bg-gradient-to-br from-primary/20 to-accent/20"
                      } rounded-xl p-3`}>
                        <Code2 className="w-6 h-6 text-base-content" />
                      </div>

                      {/* SESSION DETAILS */}
                      <div className="flex-1 min-w-0">
                        {/* Header with title and status */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                          <h3 className="font-bold text-base truncate group-hover:text-primary transition-colors pr-2">
                            {session.problem}
                          </h3>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span
                              className={`badge badge-sm ${getDifficultyBadgeClass(session.difficulty)}`}
                            >
                              {session.difficulty}
                            </span>
                            <span className={`badge badge-sm ${
                              isActive ? "badge-success" : "badge-ghost"
                            }`}>
                              {isActive ? "LIVE" : "COMPLETED"}
                            </span>
                          </div>
                        </div>

                        {/* METADATA */}
                        <div className="space-y-2 text-sm text-base-content/70 mb-3">
                          <div className="flex items-center gap-2">
                            <div className="p-1 bg-base-300 rounded">
                              <Clock className="w-3 h-3" />
                            </div>
                            <span>
                              {formatDistanceToNow(new Date(session.createdAt), {
                                addSuffix: true,
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="p-1 bg-base-300 rounded">
                              <Users className="w-3 h-3" />
                            </div>
                            <div className="flex items-center gap-3">
                              {/* Host */}
                              <div className="flex items-center gap-1">
                                <div className="w-6 h-6 bg-primary text-primary-content text-xs font-bold rounded-full flex items-center justify-center">
                                  {session.host?.name?.[0]?.toUpperCase() || "H"}
                                </div>
                                <span className="text-xs">Host</span>
                              </div>
                              
                              {/* Participant if exists */}
                              {session.participant && (
                                <>
                                  <div className="w-1 h-1 bg-base-content/30 rounded-full"></div>
                                  <div className="flex items-center gap-1">
                                    <div className="w-6 h-6 bg-secondary text-secondary-content text-xs font-bold rounded-full flex items-center justify-center">
                                      {session.participant?.name?.[0]?.toUpperCase() || "P"}
                                    </div>
                                    <span className="text-xs">Peer</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* ACTION BUTTON */}
                        {isActive && isInSession && (
                          <Link 
                            to={`/session/${session._id}`}
                            className="btn btn-success btn-sm w-full gap-2"
                          >
                            <Zap className="w-3 h-3" />
                            Rejoin Session
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="relative mx-auto mb-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-accent/10 to-secondary/10 rounded-3xl flex items-center justify-center">
                  <Code2 className="w-10 h-10 text-accent/50" />
                </div>
              </div>
              <p className="text-lg font-semibold text-base-content mb-2">No sessions yet</p>
              <p className="text-base-content/60 mb-4 max-w-xs mx-auto">
                Start your first coding collaboration to see it here
              </p>
            </div>
          )}
        </div>

        {/* FOOTER */}
        {displaySessions.length > 0 && (
          <div className="mt-6 pt-4 border-t border-base-300/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-base-content/70">
                  Showing {Math.min(displaySessions.length, 5)} of {sessions.length} sessions
                </span>
              </div>
              <Link 
                to="/sessions" 
                className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center gap-1"
              >
                View all sessions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentSessions;
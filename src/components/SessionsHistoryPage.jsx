import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useMyRecentSessions, useActiveSessions } from "../hooks/useSessions";
import Navbar from "../components/Navbar";
import { 
  Code2, 
  Clock, 
  Users, 
  CheckCircle, 
  XCircle,
  ArrowLeft,
  Filter,
  Calendar,
  TrendingUp,
  Zap
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { format } from "date-fns";
import { Link } from "react-router";

function SessionsHistoryPage() {
  const { user } = useUser();
  const { data: sessionsData, isLoading: isLoadingRecent } = useMyRecentSessions();
  const { data: activeSessionsData, isLoading: isLoadingActive } = useActiveSessions();
  
  const [filter, setFilter] = useState("all"); // 'all', 'completed', 'active'
  const [sortBy, setSortBy] = useState("newest"); // 'newest', 'oldest'

  // Combine all sessions (active and recent)
  const allSessions = [...(sessionsData?.sessions || []), ...(activeSessionsData?.sessions || [])];
  
  // Remove duplicates by session ID
  const uniqueSessions = Array.from(
    new Map(allSessions.map(session => [session._id, session])).values()
  );

  // Filter sessions
  const filteredSessions = uniqueSessions.filter(session => {
    if (filter === 'active') return session.status === "active";
    if (filter === 'completed') return session.status === "completed" || session.status === "ended";
    return true;
  });

  // Sort sessions
  const sortedSessions = [...filteredSessions].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  // Calculate stats from ALL sessions (not just recent)
  const totalSessions = uniqueSessions.length;
  const completedSessions = uniqueSessions.filter(s => s.status === "completed" || s.status === "ended").length;
  const activeSessions = uniqueSessions.filter(s => s.status === "active").length;
  const completionRate = totalSessions > 0 ? Math.round((completedSessions / totalSessions) * 100) : 0;

  // Check if user is in a session
  const isUserInSession = (session) => {
    if (!user?.id) return false;
    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };

  const isLoading = isLoadingRecent || isLoadingActive;

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/dashboard" 
            className="inline-flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-base-content">Session History</h1>
              <p className="text-base-content/60">All your coding sessions in one place</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="stats stats-horizontal shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Total</div>
                  <div className="stat-value text-primary text-xl md:text-2xl">{totalSessions}</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Active</div>
                  <div className="stat-value text-success text-xl md:text-2xl">{activeSessions}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="card bg-base-100/80 backdrop-blur-sm border border-white/10 shadow-lg mb-6">
          <div className="card-body p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <span className="font-medium">Filter by:</span>
                </div>
                <div className="tabs tabs-boxed bg-base-200 p-1">
                  <button 
                    className={`tab tab-sm ${filter === 'all' ? 'tab-active bg-base-100' : ''}`}
                    onClick={() => setFilter('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`tab tab-sm ${filter === 'active' ? 'tab-active bg-base-100' : ''}`}
                    onClick={() => setFilter('active')}
                  >
                    Active
                  </button>
                  <button 
                    className={`tab tab-sm ${filter === 'completed' ? 'tab-active bg-base-100' : ''}`}
                    onClick={() => setFilter('completed')}
                  >
                    Completed
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Sort by:</span>
                </div>
                <select 
                  className="select select-sm select-bordered"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="loading loading-spinner loading-lg text-primary"></div>
              <p className="mt-4 text-base-content/70">Loading your session history...</p>
            </div>
          ) : sortedSessions.length > 0 ? (
            sortedSessions.map((session) => {
              const isActive = session.status === "active";
              const isInSession = isUserInSession(session);
              
              return (
                <div
                  key={session._id}
                  className="card bg-base-100/80 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="card-body">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Left Section */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${
                            isActive 
                              ? "bg-success/10" 
                              : "bg-primary/10"
                          }`}>
                            <Code2 className={`w-6 h-6 ${
                              isActive ? "text-success" : "text-primary"
                            }`} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="text-lg font-bold text-base-content">
                                {session.problem}
                              </h3>
                              <span className={`badge ${getDifficultyBadgeClass(session.difficulty)}`}>
                                {session.difficulty}
                              </span>
                              <span className={`badge ${
                                isActive ? "badge-success gap-1.5" : "badge-ghost"
                              }`}>
                                {isActive && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>}
                                {isActive ? "LIVE" : "COMPLETED"}
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/70">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>
                                  {format(new Date(session.createdAt), "MMM d, yyyy • h:mm a")}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-1">
                                    <div className="w-6 h-6 bg-primary text-primary-content text-xs rounded-full flex items-center justify-center">
                                      {session.host?.name?.[0]?.toUpperCase() || "H"}
                                    </div>
                                    <span className="text-xs">Host</span>
                                  </div>
                                  {session.participant && (
                                    <div className="flex items-center gap-1">
                                      <div className="w-6 h-6 bg-secondary text-secondary-content text-xs rounded-full flex items-center justify-center">
                                        {session.participant?.name?.[0]?.toUpperCase() || "P"}
                                      </div>
                                      <span className="text-xs">Peer</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Section */}
                      <div className="flex items-center gap-4">
                        {isActive ? (
                          <div className="flex flex-col items-end gap-2">
                            <span className="text-xs text-success">In Progress</span>
                            {isInSession ? (
                              <Link 
                                to={`/session/${session._id}`}
                                className="btn btn-success btn-sm gap-2"
                              >
                                <Zap className="w-3 h-3" />
                                Rejoin
                              </Link>
                            ) : session.participant ? (
                              <button className="btn btn-error btn-sm" disabled>
                                Full
                              </button>
                            ) : (
                              <Link 
                                to={`/session/${session._id}`}
                                className="btn btn-primary btn-sm gap-2"
                              >
                                Join
                              </Link>
                            )}
                          </div>
                        ) : (
                          <div className="text-right">
                            <div className="text-sm text-base-content/70">Status</div>
                            <div className="font-bold text-success">Completed</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-base-200 rounded-full flex items-center justify-center">
                <XCircle className="w-12 h-12 text-base-content/30" />
              </div>
              <h3 className="text-xl font-bold text-base-content mb-2">No sessions found</h3>
              <p className="text-base-content/60 mb-4">
                {filter === 'all' 
                  ? "You haven't participated in any sessions yet." 
                  : `No ${filter} sessions found.`}
              </p>
              <Link to="/dashboard" className="btn btn-primary">
                Start a New Session
              </Link>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        {sortedSessions.length > 0 && (
          <div className="mt-8 card bg-base-100/80 backdrop-blur-sm border border-white/10 shadow-lg">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{sortedSessions.length}</div>
                  <div className="text-base-content/70">Sessions shown</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">{completionRate}%</div>
                  <div className="text-base-content/70">Completion rate</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <div>
                      <div className="text-3xl font-bold text-accent">{activeSessions}</div>
                      <div className="text-base-content/70">Currently active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SessionsHistoryPage;
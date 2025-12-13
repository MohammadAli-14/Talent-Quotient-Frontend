import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { 
  useActiveSessions, 
  useCreateSession, 
  useMyRecentSessions 
} from "../hooks/useSessions";

import Navbar from "../components/Navbar";
import WelcomeSection from "../components/WelcomeSection";
import StatsCards from "../components/StatsCards";
import ActiveSessions from "../components/ActiveSessions";
import RecentSessions from "../components/RecentSessions";
import CreateSessionModal from "../components/CreateSessionModal";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });

  const createSessionMutation = useCreateSession();

  const { 
    data: activeSessionsData, 
    isLoading: loadingActiveSessions, 
    refetch: refetchActiveSessions,
    dataUpdatedAt: activeSessionsUpdatedAt 
  } = useActiveSessions();

  const { 
    data: recentSessionsData, 
    isLoading: loadingRecentSessions,
    refetch: refetchRecentSessions,
    dataUpdatedAt: recentSessionsUpdatedAt 
  } = useMyRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  const handleRefreshAll = () => {
    refetchActiveSessions();
    refetchRecentSessions();
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  // Calculate statistics
  const completedSessionsCount = recentSessions.filter(s => s.status === "completed" || s.status === "ended").length;
  const activeSessionCount = activeSessions.length;
  const totalSessionCount = recentSessions.length;

  const isUserInSession = (session) => {
    if (!user.id) return false;
    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
        <Navbar />
        
        {/* Modern Glass Morphism Header */}
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-40 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Stats Section */}
          <div className="mb-10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-base-content">Dashboard Overview</h2>
                <p className="text-base-content/60">Your coding collaboration metrics</p>
              </div>
              <button 
                onClick={handleRefreshAll}
                className="btn btn-sm btn-ghost gap-2"
                disabled={loadingActiveSessions || loadingRecentSessions}
              >
                <svg 
                  className={`w-4 h-4 ${(loadingActiveSessions || loadingRecentSessions) ? 'animate-spin' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="card glass hover:scale-[1.02] transition-all duration-300">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="stat-title text-base-content/70">Live Sessions</div>
                      <div className="stat-value text-3xl text-primary">{activeSessionCount}</div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="stat-desc">Active right now</div>
                </div>
              </div>

              <div className="card glass hover:scale-[1.02] transition-all duration-300">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="stat-title text-base-content/70">Total Sessions</div>
                      <div className="stat-value text-3xl text-secondary">{totalSessionCount}</div>
                    </div>
                    <div className="p-3 bg-secondary/10 rounded-2xl">
                      <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="stat-desc">Your collaborations</div>
                </div>
              </div>

              <div className="card glass hover:scale-[1.02] transition-all duration-300">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="stat-title text-base-content/70">Completed</div>
                      <div className="stat-value text-3xl text-success">{completedSessionsCount}</div>
                    </div>
                    <div className="p-3 bg-success/10 rounded-2xl">
                      <svg className="w-7 h-7 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="stat-desc">Successful sessions</div>
                </div>
              </div>

              <div className="card glass hover:scale-[1.02] transition-all duration-300">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="stat-title text-base-content/70">Success Rate</div>
                      <div className="stat-value text-3xl text-accent">
                        {totalSessionCount > 0 ? 
                          `${Math.round((completedSessionsCount / totalSessionCount) * 100)}%` : 
                          '0%'
                        }
                      </div>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-2xl">
                      <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div className="stat-desc">Session completion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Sessions Section - Full Width */}
          <div className="mb-10">
            <ActiveSessions
              sessions={activeSessions}
              isLoading={loadingActiveSessions}
              isUserInSession={isUserInSession}
              onRefresh={refetchActiveSessions}
              lastUpdated={activeSessionsUpdatedAt}
            />
          </div>

          {/* Recent Activity Section - Full Width Below */}
          <div className="mb-10">
            <RecentSessions 
              sessions={recentSessions} 
              isLoading={loadingRecentSessions}
              activeSessions={activeSessions}
              isUserInSession={isUserInSession}
              onRefresh={refetchRecentSessions}
              lastUpdated={recentSessionsUpdatedAt}
            />
          </div>

          {/* Features Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-base-content mb-6">Collaboration Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] h-full">
                <div className="card-body">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="card-title text-lg">Real-time Video</h4>
                  <p className="text-sm text-base-content/70 mt-2">
                    High-definition video calls with multiple participants, screen sharing, and crystal clear audio.
                  </p>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/30 transition-all duration-300 hover:scale-[1.02] h-full">
                <div className="card-body">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="card-title text-lg">Live Code Editor</h4>
                  <p className="text-sm text-base-content/70 mt-2">
                    Collaborative code editing with syntax highlighting, multiple languages, and real-time execution.
                  </p>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02] h-full">
                <div className="card-body">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h4 className="card-title text-lg">Integrated Chat</h4>
                  <p className="text-sm text-base-content/70 mt-2">
                    Built-in chat system with file sharing, code snippets, and persistent message history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
}

export default DashboardPage;
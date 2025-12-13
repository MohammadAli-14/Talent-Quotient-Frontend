import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
  CpuIcon,
  TargetIcon,
  TrendingUpIcon,
  ShieldIcon,
  StarIcon,
  HeartIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  MonitorIcon,
  ClockIcon,
  CodeIcon,
  TerminalIcon,
  ServerIcon,
  CloudIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";

function HomePage() {
  const sceneRef = useRef(null);
  
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle email click
  const handleEmailClick = () => {
    window.location.href = "mailto:mohammedali5072008@gmail.com?subject=Regarding Talent Quotient&body=Hello Mohammed,";
  };

  // Add subtle mouse move effect for desktop
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sceneRef.current || window.innerWidth < 768) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      sceneRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${y * 0.3}deg) 
        rotateY(${x * 0.3}deg) 
        translateZ(0)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                             linear-gradient(to bottom, #888 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="relative bg-base-100/90 backdrop-blur-xl border-b border-base-300 sticky top-0 z-50 shadow-lg shadow-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link
              to={"/"}
              className="flex items-center gap-3 group"
            >
              <div className="relative size-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-105">
                <SparklesIcon className="size-6 text-white" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>

              <div className="flex flex-col">
                <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-sans tracking-tight">
                  Talent Quotient
                </span>
                <span className="text-xs text-base-content/60 font-medium -mt-1 tracking-wider">
                  CODE • COLLABORATE • CONQUER
                </span>
              </div>
            </Link>

            {/* AUTH BTN */}
            <SignInButton mode="modal">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[100%] flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative">Get Started</span>
                <ArrowRightIcon className="size-4 relative group-hover:translate-x-1 transition-transform" />
              </button>
            </SignInButton>
          </div>
        </div>
      </nav>

      {/* HERO SECTION with ID for navigation */}
      <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="relative space-y-8 z-10">
            {/* Modern Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <div className="relative">
                <ZapIcon className="size-4 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                COMPLETELY FREE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Elevate
                </span>
              </span>
              <br />
              <span className="text-base-content">Your Technical</span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Interviews
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-base-content/80 leading-relaxed max-w-xl font-light">
              The premier platform for collaborative coding interviews. Experience seamless pair programming,
              real-time collaboration, and shared coding sessions to excel in technical interviews.
              <span className="block mt-2 text-primary font-semibold">100% Free • No Credit Card Required</span>
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: VideoIcon, text: "HD Video Chat" },
                { icon: Code2Icon, text: "Live Code Editor" },
                { icon: ShieldIcon, text: "Secure & Private" },
                { icon: UsersIcon, text: "Real-time Collaboration" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-base-100/50 backdrop-blur-sm border border-base-300 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="size-5 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <feature.icon className="size-3 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative">Start Coding Now</span>
                  <ArrowRightIcon className="size-5 relative group-hover:translate-x-1 transition-transform" />
                </button>
              </SignInButton>
            </div>

            {/* Modern Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { value: "500+", label: "Active Coders", icon: UsersIcon, color: "text-primary", description: "Join our growing community" },
                { value: "2K+", label: "Sessions", icon: TrendingUpIcon, color: "text-secondary", description: "Hours of practice" },
                { value: "99.9%", label: "Uptime", icon: CpuIcon, color: "text-accent", description: "Reliable service" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative p-4 rounded-2xl bg-base-100/30 backdrop-blur-sm border border-base-300 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <stat.icon className={`size-4 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-base-content/60 font-medium">{stat.label}</div>
                  <div className="text-xs text-base-content/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - ENHANCED 3D VISUALIZATION */}
          <div className="relative">
            {/* 3D Interactive Scene Container */}
            <div 
              ref={sceneRef}
              className="relative w-full h-[400px] md:h-[500px] perspective-1000 transition-transform duration-500"
            >
              {/* Floating Background Elements */}
              <div className="absolute inset-0">
                {/* Animated Grid */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)`
                  }}></div>
                </div>

                {/* Floating Code Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm animate-float-slow flex items-center justify-center">
                  <CodeIcon className="size-6 text-primary/70" />
                </div>
                <div className="absolute bottom-12 right-8 w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 backdrop-blur-sm animate-float flex items-center justify-center">
                  <TerminalIcon className="size-5 text-accent/70" />
                </div>
                <div className="absolute top-32 right-20 w-20 h-20 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 border border-secondary/30 backdrop-blur-sm animate-float-slower flex items-center justify-center">
                  <ServerIcon className="size-8 text-secondary/70" />
                </div>
                <div className="absolute bottom-24 left-24 w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm animate-float-delayed flex items-center justify-center">
                  <CloudIcon className="size-6 text-primary/70" />
                </div>
              </div>

              {/* Main Interactive Cards Stack */}
              <div className="absolute inset-0 flex items-center justify-center">
                
                {/* Card 1: Video Call (Back Layer) */}
                <div className="absolute w-40 md:w-48 transform -rotate-6 -translate-x-20 md:-translate-x-24 translate-y-8 transition-all duration-700 hover:translate-y-4 hover:rotate-0 hover:scale-105">
                  <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
                    <div className="p-3">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center relative">
                        <UsersIcon className="size-8 text-primary" />
                        <div className="absolute -top-1 -right-1 size-3 bg-green-500 rounded-full border-2 border-base-100"></div>
                      </div>
                      <div className="mt-2 text-xs text-center text-base-content/70">Live Pair Session</div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Code Editor (Middle Layer) */}
                <div className="absolute w-56 md:w-64 transform translate-y-0 scale-105 transition-all duration-700 hover:translate-y-2 hover:scale-110 z-10">
                  <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
                    {/* Editor Header */}
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 px-4 py-3 border-b border-base-300 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="size-3 rounded-full bg-red-500 animate-pulse"></div>
                        <div className="size-3 rounded-full bg-yellow-500"></div>
                        <div className="size-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-mono text-base-content/60 ml-4">interview.js</div>
                    </div>
                    
                    {/* Code Content */}
                    <div className="p-4 font-mono text-sm bg-gradient-to-b from-base-100 to-base-100/90">
                      <div className="text-primary flex items-center gap-2">
                        <Code2Icon className="size-3" />
                        <span>function solveProblem()</span>
                      </div>
                      <div className="text-base-content ml-8">{`{`}</div>
                      <div className="text-accent ml-12">// Collaborative coding</div>
                      <div className="text-success ml-12">return</div>
                      <div className="text-warning ml-16">"Success! 🚀"</div>
                      <div className="text-base-content ml-8">{`}`}</div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Free Badge (Front Layer) */}
                <div className="absolute w-44 transform rotate-6 translate-x-20 md:translate-x-24 translate-y-8 transition-all duration-700 hover:translate-y-4 hover:rotate-0 hover:scale-105">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-4 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
                      <div className="text-2xl font-bold text-white mb-1">100% FREE</div>
                      <div className="text-xs text-white/90">No Hidden Charges</div>
                      <div className="mt-2 text-xs text-white/80">Always Free • Forever</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden md:block"></div>
                  <div className="absolute top-1/2 left-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-secondary/30 to-transparent -translate-x-1/2 -translate-y-6 hidden md:block"></div>
                </div>

                {/* Interactive Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full bg-primary/30 animate-particle`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl blur-2xl -z-20"></div>
            </div>

            {/* Mobile-friendly instructions */}
            <div className="mt-6 text-center md:hidden">
              <p className="text-sm text-base-content/60">Tap cards to see them in action!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION with ID for navigation */}
      <section id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
            <StarIcon className="size-4 text-primary" />
            <span className="text-sm font-semibold text-primary">CORE FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            A comprehensive platform designed to transform your technical interview preparation experience
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: VideoIcon,
              title: "HD Video & Audio",
              description: "Crystal clear communication with noise cancellation and screen sharing capabilities",
              gradient: "from-blue-500 to-cyan-500",
              features: ["720p HD Video", "Noise Cancellation", "Screen Sharing"]
            },
            {
              icon: Code2Icon,
              title: "Live Code Editor",
              description: "Real-time collaborative coding with syntax highlighting and multi-language support",
              gradient: "from-purple-500 to-pink-500",
              features: ["Real-time Collaboration", "Syntax Highlighting", "5+ Languages"]
            },
            {
              icon: UsersIcon,
              title: "Peer Matching",
              description: "Connect with developers at your skill level for meaningful practice sessions",
              gradient: "from-orange-500 to-red-500",
              features: ["Skill-based Matching", "Quick Connect", "Rating System"]
            },
            {
              icon: MonitorIcon,
              title: "Screen Sharing",
              description: "Share your screen seamlessly to demonstrate solutions and walk through problems",
              gradient: "from-indigo-500 to-blue-500",
              features: ["Full Screen Share", "Application Share", "Whiteboard Mode"]
            },
            {
              icon: MessageSquareIcon,
              title: "Chat & Notes",
              description: "Integrated chat system with shared notes for effective communication",
              gradient: "from-green-500 to-emerald-500",
              features: ["Real-time Chat", "Shared Notes", "Code Comments"]
            },
            {
              icon: ClockIcon,
              title: "Session Timer",
              description: "Built-in timer to simulate real interview conditions and time management",
              gradient: "from-violet-500 to-purple-500",
              features: ["Custom Timers", "Break Reminders", "Session Analytics"]
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-base-100/50 backdrop-blur-sm border border-base-300 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6">
                <div className="mb-4">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="size-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-base-content/70 mb-4">{feature.description}</p>
                
                {/* Feature Points */}
                <div className="space-y-2">
                  {feature.features.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-base-content/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION with ID for navigation */}
      <section id="how-it-works" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-4">
            <TargetIcon className="size-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">SIMPLE PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2"></div>
          
          {[
            { number: "01", title: "Sign Up", description: "Create your free account in seconds", icon: UsersIcon },
            { number: "02", title: "Find a Partner", description: "Connect with developers at your skill level", icon: MessageSquareIcon },
            { number: "03", title: "Start Coding", description: "Begin your collaborative coding session", icon: Code2Icon },
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                  <div className="relative size-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <div className="text-2xl font-black text-white">{step.number}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-base-content/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION with ID for navigation */}
      <section id="cta" className="relative max-w-4xl mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Interview Journey?
              </span>
            </h3>
            <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
              Join our growing community of developers mastering technical interviews through real collaboration
              <span className="block mt-2 text-primary font-semibold text-xl">Completely Free • No Credit Card Required</span>
            </p>
            <SignInButton mode="modal">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <span>Start Coding Now</span>
                <div className="relative">
                  <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 rounded-full blur group-hover:blur-md transition-all"></div>
                </div>
              </button>
            </SignInButton>
            <p className="mt-4 text-sm text-base-content/60">
              No credit card required • 100% Free Forever • Unlimited Access
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION with ID for navigation */}
      <footer id="contact" className="relative bg-base-100/80 backdrop-blur-sm border-t border-base-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <SparklesIcon className="size-5 text-white" />
                </div>
                <div>
                  <span className="font-black text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Talent Quotient
                  </span>
                  <p className="text-xs text-base-content/60">Code Together</p>
                </div>
              </div>
              <p className="text-sm text-base-content/70">
                The ultimate free platform for collaborative coding interviews and technical interview preparation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-base-content/70 hover:text-primary transition-colors cursor-pointer hover:underline"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-base-content/70 hover:text-primary transition-colors cursor-pointer hover:underline"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-base-content/70 hover:text-primary transition-colors cursor-pointer hover:underline"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('cta')}
                    className="text-base-content/70 hover:text-primary transition-colors cursor-pointer hover:underline"
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Me</h4>
              <div className="flex gap-3 mb-4">
                <a 
                  href="https://github.com/MohammadAli-14" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="size-10 rounded-lg bg-base-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <GithubIcon className="size-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohammed-ali-3791062b2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="size-10 rounded-lg bg-base-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <LinkedinIcon className="size-5" />
                </a>
                <button 
                  onClick={handleEmailClick}
                  className="size-10 rounded-lg bg-base-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                >
                  <MailIcon className="size-5" />
                </button>
              </div>
              <p className="text-sm text-base-content/70">
                Have questions or feedback?<br />
                <button 
                  onClick={handleEmailClick}
                  className="text-primary hover:underline font-medium cursor-pointer"
                >
                  mohammedali5072008@gmail.com
                </button>
              </p>
            </div>
          </div>

          {/* Creator Attribution */}
          <div className="border-t border-base-300 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="size-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <HeartIcon className="size-5 text-red-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-sm text-base-content/70">
                    Crafted with passion by
                  </p>
                  <p className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Mohammed Ali
                  </p>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm text-base-content/60">
                  © {new Date().getFullYear()} Talent Quotient. All rights reserved.
                </p>
                <p className="text-xs text-base-content/50 mt-1">
                  Empowering developers worldwide with free interview preparation tools.
                </p>
              </div>
            </div>

            {/* Creator Links */}
            <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-base-300/50">
              <a 
                href="https://github.com/MohammadAli-14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors group"
              >
                <div className="size-8 rounded-lg bg-base-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <GithubIcon className="size-4" />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/mohammed-ali-3791062b2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base-content/70 hover:text-blue-600 transition-colors group"
              >
                <div className="size-8 rounded-lg bg-base-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <LinkedinIcon className="size-4" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-2 text-base-content/70 hover:text-red-600 transition-colors group"
              >
                <div className="size-8 rounded-lg bg-base-200 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all">
                  <MailIcon className="size-4" />
                </div>
                <span className="text-sm">Email Me</span>
              </button>
              <a 
                href="mailto:mohammedali5072008@gmail.com?subject=Portfolio Inquiry&body=Hello Mohammed, I saw your Talent Quotient project and would like to know more about your work."
                className="flex items-center gap-2 text-base-content/70 hover:text-purple-600 transition-colors group"
              >
                <div className="size-8 rounded-lg bg-base-200 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <SparklesIcon className="size-4" />
                </div>
                <span className="text-sm">My Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-180deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        
        @keyframes particle {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px) scale(0); opacity: 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-particle {
          animation: particle linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .perspective-1000 {
            perspective: none;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
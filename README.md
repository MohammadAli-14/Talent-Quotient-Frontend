# Talent Quotient Frontend

<div align="center">

**React-based frontend for collaborative coding interviews with real-time video calls and code execution**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Available-green?style=for-the-badge)](https://talent-quotient-frontend.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

## 🎯 Overview

Talent Quotient Frontend is a modern React application built with Vite that provides an immersive interface for conducting technical coding interviews. This application enables real-time pair programming, video conferencing, and live code execution in a collaborative environment designed specifically for technical assessments.

The frontend connects to the Talent Quotient Backend API to deliver a seamless interview experience where interviewers can observe candidates' thought processes, problem-solving approaches, and coding skills in real-time.

## ✨ Features

### **Core Features**
- **Real-time Video Calls**: Integrated WebRTC video conferencing with screen sharing capabilities
- **Live Code Execution**: Execute code in multiple languages directly in the browser using Piston API
- **Real-time Collaboration**: Multiple users can edit code simultaneously with cursor visibility
- **Problem Database**: Curated coding problems with detailed descriptions and test cases
- **Session Management**: Create, join, and manage interview sessions
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile

### **User Experience**
- **Dark/Light Mode**: Theme toggle for comfortable coding sessions
- **Real-time Updates**: Instant feedback on code execution and test results
- **Session History**: Track and review past interview sessions
- **Progress Tracking**: Monitor coding progress and performance metrics
- **Intuitive UI**: Clean, modern interface optimized for focus and productivity

## 🏗️ Project Structure

```
├── public/                     # Static assets and images
│   ├── c++.png                # C++ language icon
│   ├── c.png                  # C language icon  
│   ├── hero.png               # Hero section background
│   ├── java.png               # Java language icon
│   ├── javascript.png         # JavaScript language icon
│   ├── php.png                # PHP language icon
│   ├── python.png             # Python language icon
│   ├── screenshot-for-readme.png  # Project screenshot
│   └── vite.svg               # Vite logo
├── src/
│   ├── api/                   # API integration services
│   │   └── sessions.js        # Session API calls
│   ├── components/            # Reusable React components
│   │   ├── ActiveSessions.jsx # Active sessions display
│   │   ├── CodeEditorPanel.jsx # Monaco editor wrapper
│   │   ├── CreateSessionModal.jsx # Session creation modal
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── OutputPanel.jsx    # Code execution output display
│   │   ├── ProblemDescription.jsx # Problem statement viewer
│   │   ├── RecentSessions.jsx # Recent sessions list
│   │   ├── SessionsHistoryPage.jsx # Full sessions history
│   │   ├── SkeletonLoader.jsx # Loading skeletons
│   │   ├── StatsCards.jsx     # Dashboard statistics cards
│   │   ├── VideoCallUI.jsx    # Video conferencing interface
│   │   └── WelcomeSection.jsx # Home page welcome section
│   ├── data/                  # Static data and configurations
│   │   └── problems.js        # Curated coding problems
│   ├── hooks/                 # Custom React hooks
│   │   ├── useSessions.js     # Session management hook
│   │   └── useStreamClient.js # WebSocket/streaming hook
│   ├── lib/                   # Utility libraries
│   │   ├── axios.js          # Axios HTTP client configuration
│   │   ├── piston.js         # Piston API integration for code execution
│   │   ├── stream.js         # Streaming utilities
│   │   └── utils.js          # General utility functions
│   ├── pages/                 # Page components
│   │   ├── DashboardPage.jsx # User dashboard
│   │   ├── HomePage.jsx      # Landing page
│   │   ├── ProblemPage.jsx   # Individual problem view
│   │   ├── ProblemsPage.jsx  # Browse all problems
│   │   └── SessionPage.jsx   # Live interview session
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── vercel.json               # Vercel deployment configuration
├── vite.config.js            # Vite build configuration
└── eslint.config.js          # ESLint configuration
```

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- Backend API running (required for full functionality)

### **1. Clone the Repository**
```bash
git clone https://github.com/MohammadAli-14/Talent-Quotient-Frontend.git
cd Talent-Quotient-Frontend
```

### **2. Install Dependencies**
```bash
npm install
# or
yarn install
```

### **3. Configure Environment Variables**
```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your configuration
```

### **4. Start Development Server**
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## ⚙️ Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Backend API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000

# Code Execution API (Piston)
VITE_PISTON_API_URL=https://emkc.org/api/v2/piston

# Feature Flags
VITE_ENABLE_VIDEO_CALL=true
VITE_ENABLE_CODE_EXECUTION=true

# Video Service (Optional - for production)
# VITE_VIDEO_SERVICE_URL=your_video_service_url
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally

# Code Quality
npm run lint       # Run ESLint for code linting
npm run format     # Format code with Prettier

# Type Checking (if using TypeScript)
npm run type-check # Check TypeScript types
```

## 📦 Dependencies

### **Core Dependencies**
- **React 18**: UI library with hooks
- **Vite**: Next-generation frontend tooling
- **React Router DOM**: Client-side routing
- **@monaco-editor/react**: Monaco Editor integration
- **Socket.io-client**: Real-time WebSocket communication
- **Axios**: HTTP client for API requests
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library

### **Development Dependencies**
- **ESLint**: Code linting and quality
- **Prettier**: Code formatting
- **Autoprefixer**: CSS vendor prefixing
- **PostCSS**: CSS processing

## 🎨 Key Components

### **Core Components**
- **`CodeEditorPanel.jsx`**: Monaco Editor wrapper with language selection and theme switching
- **`VideoCallUI.jsx`**: WebRTC video conferencing interface with controls
- **`ProblemDescription.jsx`**: Problem statement viewer with test cases
- **`OutputPanel.jsx`**: Real-time code execution output display
- **`CreateSessionModal.jsx`**: Session creation form with problem selection

### **Page Components**
- **`HomePage.jsx`**: Landing page with platform introduction
- **`DashboardPage.jsx`**: User dashboard with session statistics
- **`SessionPage.jsx`**: Main interview session interface
- **`ProblemsPage.jsx`**: Browse and search coding problems
- **`ProblemPage.jsx`**: Individual problem solving interface

### **Utility Components**
- **`Navbar.jsx`**: Responsive navigation with user menu
- **`SkeletonLoader.jsx`**: Loading state placeholders
- **`StatsCards.jsx`**: Dashboard statistics visualization
- **`ActiveSessions.jsx`**: Display currently active sessions

## 🔌 API Integration

### **Session Management**
The frontend communicates with the backend API for session management:

```javascript
// Example API usage from src/api/sessions.js
import api from '../lib/axios';

export const createSession = (sessionData) => {
  return api.post('/sessions/create', sessionData);
};

export const getSession = (sessionId) => {
  return api.get(`/sessions/${sessionId}`);
};

export const updateSession = (sessionId, updates) => {
  return api.put(`/sessions/${sessionId}`, updates);
};

export const getUserSessions = (userId) => {
  return api.get(`/sessions/user/${userId}`);
};
```

### **Real-time Communication**
WebSocket integration for real-time features:

```javascript
// Example from src/hooks/useStreamClient.js
import { useEffect, useCallback } from 'react';
import io from 'socket.io-client';

const useStreamClient = (sessionId) => {
  const socket = io(import.meta.env.VITE_WS_URL);
  
  const sendCodeUpdate = useCallback((code) => {
    socket.emit('code-update', { sessionId, code });
  }, [sessionId, socket]);

  const sendChatMessage = useCallback((message) => {
    socket.emit('chat-message', { sessionId, message });
  }, [sessionId, socket]);

  return { sendCodeUpdate, sendChatMessage };
};
```

### **Code Execution**
Integration with Piston API for running code:

```javascript
// Example from src/lib/piston.js
export const executeCode = async (language, code) => {
  const response = await fetch(`${import.meta.env.VITE_PISTON_API_URL}/execute`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ language, version: '*', files: [{ content: code }] })
  });
  return response.json();
};
```

## 🎯 Usage Guide

### **For Interviewers**
1. **Create a Session**: Navigate to Dashboard → "Create New Session"
2. **Select Problem**: Choose from curated problems or create custom ones
3. **Invite Candidate**: Share the unique session link
4. **Start Interview**: Begin video call and coding assessment
5. **Collaborate**: Edit code together and observe candidate's approach
6. **Evaluate**: Use live code execution to test solutions

### **For Candidates**
1. **Join Session**: Click the provided session link
2. **Review Problem**: Read the problem description and constraints
3. **Write Solution**: Use the Monaco Editor to implement your solution
4. **Test Code**: Run code against sample test cases
5. **Communicate**: Discuss approach with interviewer via video/chat
6. **Submit**: Finalize and submit your solution

## 🚀 Deployment

### **Deploy to Vercel (Recommended)**
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Configure environment variables in Vercel dashboard
4. Deploy with automatic CI/CD on every push

### **Build for Production**
```bash
npm run build
# Output will be in the 'dist' directory
```

### **Docker Deployment**
```dockerfile
# Frontend Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop (≥1024px)**: Full-featured interface with side-by-side panels
- **Tablet (768px-1023px)**: Adapted layout with optimized spacing
- **Mobile (<768px)**: Stacked interface with touch-friendly controls

## 🔗 Backend Integration

This frontend requires the **Talent Quotient Backend** to be running for full functionality:

- **Backend Repository**: [Talent-Qutotient-Backend](https://github.com/MohammadAli-14/Talent-Qutotient-Backend)
- **Main Repository**: [Talent-Quotient-V-2](https://github.com/MohammadAli-14/Talent-Quotient-V-2)
- **Default API URL**: `http://localhost:3000/api`

### **Required Backend Endpoints**
- `POST /api/sessions/create` - Create sessions
- `GET /api/sessions/:id` - Retrieve session data
- `POST /api/auth/*` - User authentication
- WebSocket server on port 3000

## 🧪 Testing

### **Run Tests**
```bash
npm test
# or
yarn test
```

### **Component Testing**
The project includes component testing setup for critical components:
- Code editor functionality
- API integration hooks
- User interaction flows

## 🤝 Contributing

We welcome contributions to improve the Talent Quotient Frontend! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow the existing code style and ESLint rules
- Add comments for complex logic
- Update documentation for new features
- Test your changes thoroughly
- Ensure backward compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Mohammad Ali** - *Full Stack Developer* - [MohammadAli-14](https://github.com/MohammadAli-14)

## 🙏 Acknowledgments

- **Vite Team** for the excellent build tool and development experience
- **Monaco Editor** for providing the powerful code editor component
- **Tailwind CSS** for the utility-first CSS framework
- **Piston API** for the code execution service

## 🔗 Important Links

- **Live Demo**: [https://talent-quotient-frontend.vercel.app/](https://talent-quotient-frontend.vercel.app/)
- **Frontend Repository**: [Talent-Quotient-Frontend](https://github.com/MohammadAli-14/Talent-Quotient-Frontend)
- **Backend Repository**: [Talent-Qutotient-Backend](https://github.com/MohammadAli-14/Talent-Qutotient-Backend)
- **Main Full-Stack Repo**: [Talent-Quotient-V-2](https://github.com/MohammadAli-14/Talent-Quotient-V-2)

---
<div align="center">

**Built with ❤️ by [Mohammad Ali](https://github.com/MohammadAli-14)**

⭐ **Star this repo if you found it useful!** ⭐

</div>

**Note**: This is the frontend application of the Talent Quotient platform. For a complete setup, you need to run both the frontend and backend servers. The backend provides the API, authentication, and real-time WebSocket server required for full functionality.

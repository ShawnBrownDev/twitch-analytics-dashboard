import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardHeader } from './components/DashboardHeader';
import { StatsGrid } from './components/StatsGrid';
import { ChatHeatmap } from './components/ChatHeatmap';
import { TwitchLogin } from './components/TwitchLogin';
import { TwitchCallback } from './pages/auth/twitch';
import { getCurrentUser } from './lib/twitch';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader 
          streamTitle="Welcome to the Stream!"
          isLive={true}
          startTime={new Date()}
        />
        <StatsGrid />
        <div className="grid grid-cols-1 gap-6">
          <ChatHeatmap />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const user = await getCurrentUser();
      setIsAuthenticated(!!user);
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/auth/twitch" element={<TwitchCallback />} />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <TwitchLogin />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
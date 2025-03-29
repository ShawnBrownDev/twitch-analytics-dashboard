import React from 'react';
import { Twitch, ChevronRight, BarChart2, Users, MessageSquare } from 'lucide-react';
import { initializeTwitchAuth } from '../lib/twitch';

export const TwitchLogin: React.FC = () => {
  const handleLogin = () => {
    initializeTwitchAuth();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Twitch className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stream Analytics Dashboard
            </h1>
            <p className="text-purple-200 text-lg md:text-xl max-w-2xl mx-auto">
              Get real-time insights into your stream performance, chat engagement, and viewer analytics
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="bg-purple-500 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <BarChart2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-purple-200">Track your viewer count, follower growth, and stream metrics in real-time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="bg-purple-500 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat Insights</h3>
              <p className="text-purple-200">Monitor chat activity, engagement patterns, and popular emotes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="bg-purple-500 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Audience Growth</h3>
              <p className="text-purple-200">Track your community growth with detailed follower and subscriber analytics</p>
            </div>
          </div>

          {/* Login Button */}
          <div className="text-center">
            <button
              onClick={handleLogin}
              className="group relative inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900"
            >
              <Twitch className="w-6 h-6 mr-3" />
              Connect with Twitch
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-purple-300 text-sm">
              Secure login powered by Twitch OAuth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
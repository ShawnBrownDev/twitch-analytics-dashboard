import React from 'react';
import { Activity, Users, Heart, MessageSquare } from 'lucide-react';

interface DashboardHeaderProps {
  streamTitle: string;
  isLive: boolean;
  startTime?: Date;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  streamTitle,
  isLive,
  startTime,
}) => {
  return (
    <div className="bg-purple-700 text-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Activity className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">{streamTitle}</h1>
            <div className="flex items-center mt-2">
              {isLive ? (
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  Live Now
                </span>
              ) : (
                <span className="text-gray-300">Offline</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex space-x-6">
          <div className="flex items-center">
            <Users className="w-6 h-6 mr-2" />
            <span className="text-xl font-semibold">0</span>
          </div>
          <div className="flex items-center">
            <Heart className="w-6 h-6 mr-2" />
            <span className="text-xl font-semibold">0</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-6 h-6 mr-2" />
            <span className="text-xl font-semibold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
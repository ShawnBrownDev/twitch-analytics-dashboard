import React from 'react';
import { Users, Heart, Gift, MessageSquare, Zap, Star } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  change?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
        {change !== undefined && (
          <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? '+' : ''}{change}%
          </p>
        )}
      </div>
      <div className="text-purple-500">{icon}</div>
    </div>
  </div>
);

export const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <StatCard
        title="Current Viewers"
        value="0"
        icon={<Users className="w-8 h-8" />}
        change={5}
      />
      <StatCard
        title="Followers"
        value="0"
        icon={<Heart className="w-8 h-8" />}
        change={2}
      />
      <StatCard
        title="Subscribers"
        value="0"
        icon={<Gift className="w-8 h-8" />}
        change={-1}
      />
      <StatCard
        title="Chat Messages"
        value="0/min"
        icon={<MessageSquare className="w-8 h-8" />}
      />
      <StatCard
        title="Bits"
        value="0"
        icon={<Zap className="w-8 h-8" />}
      />
      <StatCard
        title="Stream Rating"
        value="4.8"
        icon={<Star className="w-8 h-8" />}
      />
    </div>
  );
};
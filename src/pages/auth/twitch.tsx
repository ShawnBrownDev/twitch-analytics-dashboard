import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeCodeForToken } from '../../lib/twitch';

export const TwitchCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const state = params.get('state');
      const savedState = sessionStorage.getItem('twitch_auth_state');

      if (!code || state !== savedState) {
        console.error('Invalid auth callback');
        navigate('/');
        return;
      }

      try {
        const tokenData = await exchangeCodeForToken(code);
        if (tokenData?.access_token) {
          // Store the token securely and redirect
          sessionStorage.setItem('twitch_token', tokenData.access_token);
          navigate('/dashboard');
        } else {
          throw new Error('Failed to get access token');
        }
      } catch (error) {
        console.error('Auth error:', error);
        navigate('/');
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
    </div>
  );
};
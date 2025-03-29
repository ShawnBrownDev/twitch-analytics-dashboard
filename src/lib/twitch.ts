import { supabase } from './supabase';

const TWITCH_CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export const initializeTwitchAuth = () => {
  const scope = 'channel:read:stats channel:read:subscriptions analytics:read:games';
  const state = Math.random().toString(36).substring(7);
  sessionStorage.setItem('twitch_auth_state', state);
  
  const params = new URLSearchParams({
    client_id: TWITCH_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: scope,
    state: state
  });
  
  window.location.href = `${REDIRECT_URI}/auth/twitch?${params.toString()}`;
};

export const exchangeCodeForToken = async (code: string) => {
  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/twitch-auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        action: 'token',
        code: code
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    return null;
  }
};

export const fetchTwitchStats = async (accessToken: string) => {
  try {
    const response = await fetch('https://api.twitch.tv/helix/streams', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Client-Id': TWITCH_CLIENT_ID,
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Twitch stats:', error);
    return null;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    return session?.user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};
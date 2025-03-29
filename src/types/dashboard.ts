export interface StreamStats {
  currentViewers: number;
  followers: number;
  subscribers: number;
  bits: number;
  chatMessagesPerMinute: number;
  topEmotes: Array<{ emote: string; count: number }>;
  recentRaids: Array<{ raider: string; viewers: number; timestamp: Date }>;
}

export interface ChatActivity {
  timestamp: Date;
  messageCount: number;
  uniqueChatters: number;
  emoteCount: number;
}
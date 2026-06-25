export interface IGraphNode {
  userId: string;
  friends: Set<string>;
  interests: string[];
}

export interface IGraphStats {
  totalUsers: number;
  totalFriendships: number;
  averageFriendsPerUser: number;
  networkDensity: number;
  topConnectedUsers: Array<{
    userId: string;
    name: string;
    connections: number;
  }>;
  connectionDistribution: Record<number, number>;
}

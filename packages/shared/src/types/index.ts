export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum FriendshipStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  bio?: string;
  location?: string;
  avatar?: string;
  interests: string[];
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFriendship {
  _id: string;
  requester: string;
  recipient: string;
  status: FriendshipStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMutualFriend {
  _id: string;
  name: string;
  avatar?: string;
}

export interface IRecommendation {
  user: Omit<IUser, 'password'>;
  score: number;
  mutualFriends: number;
  mutualFriendsList: IMutualFriend[];
  jaccardSimilarity: number;
  interestSimilarity: number;
  socialDistance: number | null;
  reason: string;
}

export interface IGraphStats {
  totalUsers: number;
  totalFriendships: number;
  averageFriendsPerUser: number;
  networkDensity: number;
  suggestedFriendsCount: number;
  topConnectedUsers: Array<{
    userId: string;
    name: string;
    connections: number;
  }>;
  connectionDistribution: Record<number, number>;
}

export interface IApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

export interface IPaginationQuery {
  page?: number;
  limit?: number;
}

export interface IPaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

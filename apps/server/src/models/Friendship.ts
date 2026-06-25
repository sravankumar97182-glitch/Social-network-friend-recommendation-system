import mongoose, { Schema, Document, Types } from 'mongoose';
import { FriendshipStatus } from '@shared/types';

interface IFriendshipDocument extends Document {
  requester: Types.ObjectId;
  recipient: Types.ObjectId;
  status: FriendshipStatus;
  createdAt: Date;
  updatedAt: Date;
}

const friendshipSchema = new Schema<IFriendshipDocument>(
  {
    requester: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(FriendshipStatus),
      default: FriendshipStatus.PENDING,
    },
  },
  { timestamps: true }
);

friendsshipSchema.index({ requester: 1, recipient: 1 }, { unique: true });
friendsshipSchema.index({ status: 1 });
friendsshipSchema.index({ requester: 1, status: 1 });
friendsshipSchema.index({ recipient: 1, status: 1 });

export const Friendship = mongoose.model<IFriendshipDocument>('Friendship', friendshipSchema);

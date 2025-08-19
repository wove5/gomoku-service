import mongoose from 'mongoose';
export interface IncompleteGameData {
  // _id: string;
  _id: mongoose.Types.ObjectId;
  gameNumber: number;
  size: number[];
  createdAt: Date;
}

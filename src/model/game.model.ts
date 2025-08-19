import mongoose from 'mongoose';

enum POSITION_STATUS {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  NONE = 'NONE',
}

enum SELPOS_STATUS {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

enum GAMESTATUS {
  ACTIVE = 'ACTIVE',
  WON = 'WON',
  DRAWN = 'DRAWN',
}

// export interface CompleteGameDocument extends Document {  // mongoose docs recommend not extending Document
export interface GameDocument {
  // userId: UserDocument['_id'];  // to use this, UserDocument interface will need an explicit _id property
  // userId: mongoose.Types.ObjectId; // this seems to fit better with mongoose 6.x and typing
  _id: mongoose.Types.ObjectId,
  players: [
    {
      userId: mongoose.Types.ObjectId;
      color: POSITION_STATUS;
      userName: string;
    }
  ];
  gameNumber: number;
  size: number[];
  status: GAMESTATUS;
  positions: Array<{
    status: POSITION_STATUS;
  }>;
  selectedPositions: number[];
  createdAt: Date;
  updatedAt: Date;
}

const gameSchema = new mongoose.Schema(
  {
    // _id: mongoose.Types.ObjectId,  // check if this is needed - looks like it can be left out
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    players: [
      {
        _id: false,
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        color: String,
        userName: String,
      },
    ],
    gameNumber: Number,
    size: [Number],
    status: String,
    positions: [
      {
        status: String,
      },
    ],
    selectedPositions: [Number],
  },
  { timestamps: true }
);

export default mongoose.model<GameDocument>('Game', gameSchema);

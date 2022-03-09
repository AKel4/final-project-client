export interface IRoomGetAllResponse {
  id: string,
  room: string,
  chores: [],
}


export interface IChores {
  id: string;
  chore: string;
  desc: string;
  time: number;
  houseCode: number;
  userId: string;
  roomId: string;
}

export interface IRoomGetAllResponse2 {
  id: string,
  room: string,
  chores: IChores2,
}


export interface IChores2 {
  id: string;
  chore: string;
  desc: string;
  time: number;
  houseCode: number;
  userId: string;
  roomId: string;
}
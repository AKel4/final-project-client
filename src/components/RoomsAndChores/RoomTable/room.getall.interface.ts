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
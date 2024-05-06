export interface RoomOwner {
  _id: string;
  name: string;
  icon?: {
    url?: string;
  };
}
export interface Rooms {
  _id: string;
  name: string;
  description: string;
  icon: string;
  banner: string;
  createdAt?: string;
  membersCount?: number | any;
  owner?: RoomOwner;
  tags?: string[];
  props?: {name?: string, options?: {
    url?: {
      runs: []{ text?: string }
    }[]
  }}
}

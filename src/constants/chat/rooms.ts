import { MutableRefObject } from "react";
interface Props {
  _id: number;
  name: string;
  content: string;
  image?: string;
  ref?: any;
  separators?: any;
}

export const RoomDummyList: Props[] = [
  {
    _id: 1,
    image:
      "https://variety.com/wp-content/uploads/2024/04/Watcher-Logo.png?w=1024",
    name: "The Watchers",
    content: "Join our group for more fun.",
  },
];

import { MutableRefObject } from "react";
export interface Props {
  _id: number;
  name: string;
  content: string;
  image?: string;
  ref?: any;
  separators?: any;
}

export const MessageDummyList: Props[] = [
  {
    _id: 1,
    image:
      "https://banner2.cleanpng.com/20190606/xch/kisspng-faded-music-mask-disc-jockey-darkside-5cf8dd7baf38c5.5844290115598134997177.jpg",
    name: "Alan",
    content: "Looking forward to our collaboration!",
  },
  {
    _id: 2,
    image: "https://sosugary.com/wp-content/uploads/2022/01/TheWeeknd_001.jpg",
    name: "Weekend",
    content: "Amazing!! 🔥🔥🔥",
  },
  {
    _id: 3,
    name: "Selena",
    image:
      "https://assets.teenvogue.com/photos/589dcce16d33d9e97bc045d2/16:9/w_2560%2Cc_limit/GettyImages-587593904.jpg",
    content: "Appreciate the opportunity to connect and share insights.",
  },
  {
    _id: 4,
    name: "Shakira",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/9A9B/production/_116497593_gettyimages-971720370.jpg",

    content: "Let's bring creativity to the forefront of our discussions.",
  },
  {
    _id: 5,
    name: "K'naan",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    content: "Excited to explore opportunities for collaboration.",
  },
  {
    _id: 6,
    image:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    name: "Amy",
    content: "Eager to contribute and make a positive impact.",
  },
];

import { IMessage } from "react-native-gifted-chat";

export const FAKE_CONVERSATION: IMessage[] = [
  {
    _id: 7,
    text: "Yeah, definitely. What are your plans for the evening?",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "rit3zh",
      avatar: "https://avatars.githubusercontent.com/u/119659853?v=4",
    },
  },
  {
    _id: 8,
    text: "I was thinking of going out for dinner. How about you?",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Jane Smith",
      avatar:
        "https://pbs.twimg.com/profile_images/1292134549506469893/5i3x8erL_400x400.jpg",
    },
  },
  {
    _id: 5,
    text: "Sounds nice. I might just stay in and watch a movie.",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "rit3zh",
      avatar: "https://avatars.githubusercontent.com/u/119659853?v=4",
    },
  },
  {
    _id: 6,
    text: "That sounds relaxing. Enjoy your movie night!",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Jane Smith",
      avatar:
        "https://pbs.twimg.com/profile_images/1292134549506469893/5i3x8erL_400x400.jpg",
    },
  },
  {
    _id: 3,
    text: "Not bad. Just had a busy day at work.",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "rit3zh",
      avatar: "https://avatars.githubusercontent.com/u/119659853?v=4",
    },
  },
  {
    _id: 4,
    text: "I understand. It's important to take some time to relax after a busy day.",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Jane Smith",
      avatar:
        "https://pbs.twimg.com/profile_images/1292134549506469893/5i3x8erL_400x400.jpg",
    },
  },
  {
    _id: 1,
    text: "Hi! It was pretty good, thanks for asking. How about yours?",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "rit3zh",
      avatar: "https://avatars.githubusercontent.com/u/119659853?v=4",
    },
  },
  {
    _id: 2,
    text: "Hey! How was your day?",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Jane Smith",
      avatar:
        "https://pbs.twimg.com/profile_images/1292134549506469893/5i3x8erL_400x400.jpg",
    },
  },
];

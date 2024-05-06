import type { IMessage, User } from "react-native-gifted-chat";
import uuid from "react-native-uuid";

interface Options extends IMessage {
  user: User;
  text: string;
}

type MessageOptions = Omit<Options, "_id" | "createdAt">;
export function createMessage(options: MessageOptions): IMessage[] {
  return [
    {
      _id: uuid.v4().toString(),
      createdAt: new Date(),
      ...options,
    },
  ];
}

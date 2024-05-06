import type { IMessage } from "react-native-gifted-chat";

type IReaction = {
  reaction?: string;
};
export type ExtendedMessage = IMessage & IReaction;

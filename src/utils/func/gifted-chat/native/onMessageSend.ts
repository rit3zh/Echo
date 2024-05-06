import { IMessage } from "react-native-gifted-chat";

interface Message {
  message: IMessage;
}
export function onMessageSend(message: Message) {
  return [message];
}

import { View, Text } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";

// @GiftedChat
import { GiftedChat, type IMessage } from "react-native-gifted-chat";

export default function Message() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useLayoutEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

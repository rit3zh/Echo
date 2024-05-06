import { LayoutAnimation, StyleSheet, Text, View } from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import EmojiPicker from "rn-emoji-keyboard";
import { RNEmojiKeyboardThemeDark } from "../../../constants/rn-emoji/theme/RNEmojiTheme";

// @GiftedChat
import {
  GiftedChat,
  User,
  type IMessage,
  Message as MessageContainer,
  MessageText,
  Time,
  Avatar,
} from "react-native-gifted-chat";

// @Params
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

// Constants
import { Theme } from "../../../theme/app/constants/theme";

// @Components
import {
  GiftedChatInputToolBarComponent,
  GiftedChatBubbleComponent,
} from "../../../components/import";

// Hooks
import { useKeyboardListener } from "../../../hooks";

// Helpers
import { createMessage } from "../../../utils";

import { Constants } from "../../../constants";

const RoomGiftedChat = () => {
  const params = {
    name: "The Watchers",
  };
  const [fetching, setFetching] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [user, setUser] = useState<User>({
    _id: 2,
    name: "rit3zh",
    avatar: "https://avatars.githubusercontent.com/u/119659853?v=4",
  });
  const topValue = useKeyboardListener(35);
  const onSend = useCallback((messages: IMessage[]) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setMessages((previousMessage) =>
      GiftedChat.append(previousMessage, messages)
    );
    setText("");
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      setMessages(Constants.Chat.FakeRoomConversation);
    }, 4000);
  }, []);

  const onSendPress = async () =>
    onSend(
      createMessage({
        text: text,
        user,
      })
    );

  return (
    <>
      <GiftedChat
        messagesContainerStyle={{
          backgroundColor: Theme.dark.backgroundColor,
        }}
        renderAvatar={(props) => (
          <Avatar
            {...props}
            imageStyle={{
              left: { top: 20 },
            }}
          />
        )}
        textInputProps={{
          ...{
            borderRadius: 20,
            backgroundColor: "white",
            paddingHorizontal: 12,
            marginTop: 6,
            borderWidth: 0.6,
            borderColor: "gray",
          },
        }}
        renderMessage={(props) => <MessageContainer {...props} />}
        renderBubble={(props) => (
          <>
            <GiftedChatBubbleComponent initialBubbleProps={props} />
          </>
        )}
        renderTime={(props) => (
          <>
            <Time {...props} />
          </>
        )}
        renderFooter={() => <View style={{ marginBottom: 50 }} />}
        renderInputToolbar={() => (
          <GiftedChatInputToolBarComponent
            onSendPress={onSendPress}
            username={params?.name}
            onValueChange={(text) => setText(text)}
            value={topValue}
            text={text}
          />
        )}
        messages={messages}
        user={user}
        onLongPress={() => {
          return;
        }}
      />
    </>
  );
};

export default RoomGiftedChat;

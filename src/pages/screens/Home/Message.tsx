import { SafeAreaView, StyleSheet } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";

import { ContextMenuView } from "react-native-ios-context-menu";

import EmojiPicker from "rn-emoji-keyboard";
import { RNEmojiKeyboardThemeDark } from "../../../constants/rn-emoji/theme/RNEmojiTheme";

// @GiftedChat
import { Bubble, GiftedChat, type IMessage } from "react-native-gifted-chat";

// @Params
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

// Constants
import { Theme } from "../../../theme/app/constants/theme";
import { MENU_PROPS } from "../../../constants/context-menu/Config";

// @Components
import {
  GiftedChatInputToolBarComponent,
  GiftedChatBubbleComponent,
} from "../../../components/import";

// Hooks
import { useKeyboardListener } from "../../../hooks";

export function Message(props: NativeStackHeaderProps) {
  const params = props.route.params as any;

  const [open, setOpen] = useState<boolean>(false);

  const [messages, setMessages] = useState<IMessage[]>([]);
  const topValue = useKeyboardListener(10);

  return (
    <>
      <GiftedChat
        messagesContainerStyle={{
          backgroundColor: Theme.dark.backgroundColor,
        }}
        textInputProps={{
          ...styles.textInputStyle,
        }}
        renderBubble={(props) => (
          <GiftedChatBubbleComponent initialBubbleProps={props} />
        )}
        renderInputToolbar={() => (
          <GiftedChatInputToolBarComponent
            username={params?.name}
            value={topValue}
          />
        )}
        onLongPress={() => {}}
        messages={messages}
        user={{
          _id: 1,
        }}
      />
      <EmojiPicker
        open={open}
        onClose={() => setOpen(false)}
        onEmojiSelected={(emoji) => console.log(emoji)}
        enableSearchAnimation={true}
        enableSearchBar={true}
        expandable={true}
        theme={RNEmojiKeyboardThemeDark}
      />
    </>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    borderRadius: 20,
    backgroundColor: "black",
    paddingHorizontal: 12,
    marginTop: 6,
    borderWidth: 0.6,
    borderColor: "gray",
  },
});

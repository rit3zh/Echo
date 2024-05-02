import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
  Keyboard,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";

import { ContextMenuView } from "react-native-ios-context-menu";

// @GiftedChat
import { Bubble, GiftedChat, type IMessage } from "react-native-gifted-chat";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Theme } from "../../../theme/app/constants/theme";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: string;
}

export default function GiftedChatContext(requiredProps: Props) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [topValue, setTopValue] = useState<number>(10);
  useLayoutEffect(() => {
    const keyboardDidOpenListener = Keyboard.addListener(
      "keyboardWillShow",
      () => setTopValue(0)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => setTopValue(10)
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidOpenListener.remove();
    };
  }, []);
  useLayoutEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello this is a long message written by 17 year old boy from India. He is seriously depressed about his life. He wanted to be happt but was unable to find any reason to be happy about.",
        createdAt: new Date(),
        user: {
          _id: 1,
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
      messagesContainerStyle={{
        backgroundColor: Theme.dark.backgroundColor,
      }}
      textInputProps={{
        ...styles.textInputStyle,
      }}
      onLongPress={() => {}}
      renderInputToolbar={(props) => {
        return (
          <SafeAreaView
            style={{
              backgroundColor: Theme.dark.backgroundColor,
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                bottom: 0,
              }}
            >
              <View
                style={{
                  marginLeft: 5,
                }}
              >
                <Ionicons name="add" size={30} color="#F5F5F5" />
              </View>
              <View
                style={{
                  backgroundColor: "#121212",
                  borderRadius: 30.0,
                  height: 30.0,
                  flexDirection: "row",
                  alignItems: "center",
                  width: Dimensions.get("window").width - 90,
                }}
              >
                <View style={{ flex: 1 }}>
                  <TextInput
                    cursorColor={"white"}
                    selectionColor={"white"}
                    placeholder={`Send a message to ${requiredProps?.name}`}
                    style={{
                      marginLeft: 20,
                      maxWidth: 250,
                      color: "white",
                    }}
                    placeholderTextColor={"#F5F5F5"}
                  />
                </View>
              </View>
              <View
                style={{
                  marginRight: 5,
                }}
              >
                <Ionicons name="arrow-forward-circle" size={30} color="white" />
              </View>
            </View>
          </SafeAreaView>
        );
      }}
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
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

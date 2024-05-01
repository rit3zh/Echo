import { View, Text } from "react-native";
import React from "react";
import { ChatListComponent } from "../../../components/import";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export function Chat(props: NativeStackHeaderProps) {
  const onPress = (name: string, image: string) =>
    props.navigation.navigate("Messages", {
      name,
      image,
    });
  return <ChatListComponent onPress={onPress} />;
}

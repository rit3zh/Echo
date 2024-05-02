import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { ChatListComponent } from "../../../components/import";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { SearchBar } from "react-native-screens";

export function Chat(props: NativeStackHeaderProps) {
  const onPress = (name: string, image: string) => {
    props.navigation.navigate("Messages", {
      name,
      image,
    });
  };

  return <ChatListComponent onPress={onPress} onContextMenuPress={onPress} />;
}

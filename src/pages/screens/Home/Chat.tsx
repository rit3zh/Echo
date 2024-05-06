import React from "react";
import { ChatListComponent, ScreenTimeout } from "../../../components/import";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Theme } from "../../../theme/app/constants/theme";

export function Chat(props: NativeStackHeaderProps) {
  const onPress = (name: string, image: string, segmentValue?: string) => {
    props.navigation.navigate("Messages", {
      name,
      image,
      type: segmentValue === "Rooms" ? "Room" : undefined,
    });
  };

  return (
    <React.Fragment>
      <ScreenTimeout
        timeout={2000}
        backgroundColor={Theme.dark.backgroundColor}
      >
        <ChatListComponent onPress={onPress} onContextMenuPress={onPress} />
      </ScreenTimeout>
    </React.Fragment>
  );
}

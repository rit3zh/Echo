import { View, Text } from "react-native";
import React from "react";

interface Props {
  params: any;
}
const ChatScreenHeaderNavigator: React.FC<Props> = ({ params }: Props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "700",
          color: "white",
        }}
      >
        {params?.name}
      </Text>
      <Text
        style={{
          color: "gray",
          fontSize: 13,
        }}
      >
        {"Online"}
      </Text>
    </View>
  );
};

export default ChatScreenHeaderNavigator;

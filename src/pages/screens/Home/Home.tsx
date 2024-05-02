import { View, Text } from "react-native";
import React from "react";
import {
  AppBoardingComponent,
  IOSNavigationStyleCustomHeader,
} from "../../../components/import";
import { Theme } from "../../../theme/app/constants/theme";
import { AppleStyle } from "react-native-scrollable-navigation-bar";

export function Home() {
  return (
    <View
      style={{
        backgroundColor: Theme.dark.backgroundColor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Hello</Text>
    </View>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { AppBoardingComponent } from "../../../components/import";
import { Theme } from "../../../theme/app/constants/theme";

export function Home() {
  return (
    <View style={{ backgroundColor: Theme.dark.backgroundColor, flex: 1 }}>
      <AppBoardingComponent />
      <Text>Home</Text>
    </View>
  );
}

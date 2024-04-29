import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator, LandingNavigator } from "../flows/index";
const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name={"LandingStack "} component={LandingNavigator} /> */}
      <Stack.Screen name={"HomeStack"} component={HomeNavigator} />
    </Stack.Navigator>
  );
}

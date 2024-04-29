import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Chat } from "../../pages/screens";

const Stack = createNativeStackNavigator();

export function ChatStackScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"ChatListScreen"} component={Chat} />
    </Stack.Navigator>
  );
}

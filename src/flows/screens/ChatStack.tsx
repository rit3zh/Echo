import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Chat } from "../../pages/screens";
import { Theme } from "../../theme/app/constants/theme";

const Stack = createNativeStackNavigator();

export function ChatStackScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"ChatListScreen"}
        options={({}) => ({
          title: "Chats",
          headerLargeTitle: true,
          headerLargeStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerTitleStyle: {
            color: Theme.dark.title,
          },
          headerSearchBarOptions: {
            placeholder: "Search for someone",
          },
        })}
        component={Chat}
      />
    </Stack.Navigator>
  );
}

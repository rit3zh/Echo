import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings } from "../../pages/screens";
import { Theme } from "../../theme/app/constants/theme";

const Stack = createNativeStackNavigator();

export function SettingsStackScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"SettingsListScreen"}
        component={Settings}
        options={({}) => ({
          title: "Settings",
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
          contentStyle: {
            backgroundColor: "#000",
          },
          headerSearchBarOptions: {
            placement: "automatic",
            placeholder: "Search",
            textColor: "white",
          },
        })}
      />
    </Stack.Navigator>
  );
}

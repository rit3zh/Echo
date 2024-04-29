import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings } from "../../pages/screens";

const Stack = createNativeStackNavigator();

export function SettingsStackScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"SettingsListScreen"} component={Settings} />
    </Stack.Navigator>
  );
}

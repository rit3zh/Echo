import { View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateGroup } from "../../pages/screens";
import { Theme } from "../../theme/app/constants/theme";
import { DrawerToggleButton } from "@react-navigation/drawer";
import OptionsNavigator from "./OptionsNavigator";
const { Navigator, Screen, Group } = createNativeStackNavigator();

export function CreateGroupStack() {
  return (
    <Navigator>
      <Screen
        name="CreateGroupScreen"
        component={CreateGroup}
        options={{
          title: "Group",
          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerTitleStyle: {
            color: "white",
          },
          headerLeft: () => (
            <View
              style={{
                right: 15,
              }}
            >
              <DrawerToggleButton tintColor="white" />
            </View>
          ),
        }}
      />

      <Screen
        name="OptionsNavigator"
        component={OptionsNavigator}
        options={{
          presentation: "formSheet",
          headerShown: false,
        }}
      />
    </Navigator>
  );
}

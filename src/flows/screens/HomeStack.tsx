import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../pages/screens";

import { DrawerToggleButton } from "@react-navigation/drawer";
import { View } from "react-native";
import { Theme } from "../../theme/app/constants/theme";

const Stack = createNativeStackNavigator();

export function HomeStackScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        component={Home}
        options={({}) => ({
          title: "Explore",
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

          headerLeft: () => (
            <View
              style={{
                right: 15,
              }}
            >
              <DrawerToggleButton tintColor="white" />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

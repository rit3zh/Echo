import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../pages/screens";
import { Header } from "@react-navigation/elements";
import { AppleStyle } from "react-native-scrollable-navigation-bar";

import { DrawerToggleButton } from "@react-navigation/drawer";
import { SafeAreaView, Text, View } from "react-native";
import { Theme } from "../../theme/app/constants/theme";
import {
  ScreenStackHeaderConfig,
  ScreenStackHeaderSearchBarView,
  SearchBar,
} from "react-native-screens";

const Stack = createNativeStackNavigator();

export function HomeStackScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        component={Home}
        options={({}) => ({
          headerLargeTitle: true,
          headerLargeStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },

          title: "Explore",

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

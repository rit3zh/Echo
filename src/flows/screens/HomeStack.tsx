import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../pages/screens";

import { DrawerToggleButton } from "@react-navigation/drawer";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export function HomeStackScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        component={Home}
        options={({}) => ({
          headerLeft: () => (
            <View
              style={{
                right: 15,
              }}
            >
              <DrawerToggleButton tintColor="black" />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

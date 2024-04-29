import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeNavigator } from "../flows";

const DrawerStack = createDrawerNavigator();

export function Drawer() {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen
        name={"HomeDrawer"}
        options={{
          headerShown: false,
          title: "Home",
        }}
        component={HomeNavigator}
      />
    </DrawerStack.Navigator>
  );
}

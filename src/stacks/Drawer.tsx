import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeNavigator } from "../flows";
import { CustomDrawerContent } from "../components/import";
import { CreateGroup, Invite, Notifications } from "../pages/screens";
import { CreateGroupStack } from "../nested/index";

import { Ionicons } from "@expo/vector-icons";

const DrawerStack = createDrawerNavigator();

export function Drawer() {
  return (
    <DrawerStack.Navigator
      drawerContent={(drawerProps) => <CustomDrawerContent {...drawerProps} />}
      screenOptions={{
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "gray",
        drawerActiveBackgroundColor: "transparent",
      }}
    >
      <DrawerStack.Screen
        name={"HomeDrawer"}
        options={{
          headerShown: false,
          title: "Home",
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
          },
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
        component={HomeNavigator}
      />

      <DrawerStack.Screen
        name={"Create"}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
          },
          drawerIcon: ({ color }) => (
            <Ionicons name="add" size={22} color={color} />
          ),
        }}
        component={CreateGroupStack}
      />
      <DrawerStack.Screen
        name={"Notifications"}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
          },
          drawerIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={22} color={color} />
          ),
        }}
        component={Notifications}
      />

      <DrawerStack.Screen
        name={"Invite"}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
          },
          drawerIcon: ({ color }) => (
            <Ionicons name="share-outline" size={22} color={color} />
          ),
        }}
        component={Invite}
      />
    </DrawerStack.Navigator>
  );
}

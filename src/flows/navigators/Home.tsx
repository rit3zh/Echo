import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
// Home Screens
import { Home, Chat, Settings } from "../../pages/screens/index";
import { Ionicons } from "@expo/vector-icons";
import ReAnimatedBottomTabs from "reanimated-bottom-tabs";
import { useInitialFonts, Fonts } from "../../hooks/custom/useFont";
import { ChatStackScreenNavigator } from "../screens/ChatStack";
import { HomeStackScreenNavigator } from "../screens/HomeStack";
import { SettingsStackScreenNavigator } from "../screens/SettingsStack";

const BottomTab = createBottomTabNavigator();

export enum RootScreenEnum {
  RootTab1 = "Home",
  RootTab2 = "Chats",
  RootTab3 = "Settings",
}

export function HomeNavigator() {
  const FontFamily = useInitialFonts();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => (
        <ReAnimatedBottomTabs
          moverStyle={{
            backgroundColor: "black",
            borderRadius: 14,
            elevation: 3,
          }}
          itemLabelStyle={{
            fontFamily: FontFamily ? Fonts.CircularNormal : null,
          }}
          margin={20}
          activeColor="white"
          contentContainerStyle={{
            backgroundColor: "transparent",
            borderRadius: 14,
            elevation: 3,
          }}
          {...props}
        />
      )}
    >
      <BottomTab.Screen
        name={RootScreenEnum.RootTab1}
        component={HomeStackScreenNavigator}
        options={{
          tabBarIcon: () => <Ionicons name={"home"} size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name={RootScreenEnum.RootTab2}
        component={ChatStackScreenNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name={"chatbubble"} size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name={RootScreenEnum.RootTab3}
        component={SettingsStackScreenNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name={"settings"} size={24} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

import React, { useLayoutEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderBackButton } from "@react-navigation/elements";
import { Message } from "../../pages/screens";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import {
  ChatScreenHeaderNavigator,
  NavigatorHeaderRoom,
} from "../../components/import";
import { DrawerRightSideActions } from "../../actions/index";
import { Theme } from "../../theme/app/constants/theme";
import { Userpic } from "react-native-userpic";
import { View } from "react-native";
const DrawerStack = createDrawerNavigator();

export function RoomDrawerNavigation(props: NativeStackHeaderProps) {
  const initialParams: object | any = props.route.params;

  useLayoutEffect(() => {}, []);

  return (
    <DrawerStack.Navigator
      id="room_native_drawer"
      drawerContent={(props) => <DrawerRightSideActions {...props} />}
      screenOptions={{
        title: "",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "gray",

        drawerPosition: "right",
        drawerActiveBackgroundColor: "transparent",
        swipeEnabled: false,
      }}
    >
      <DrawerStack.Screen
        name="RoomSearch"
        component={Message}
        options={({ navigation }) => ({
          headerShown: true,
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Userpic
                source={{
                  uri: props.route.params.image,
                }}
                size={35}
                radius={9999}
                badge={true}
                badgeProps={{
                  size: 22,
                  position: "top-right",
                  style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: "#04c437",
                  },
                  textStyle: {
                    marginHorizontal: 0,
                  },
                }}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerLeft: () => (
            <>
              <HeaderBackButton
                style={{
                  marginLeft: 10,
                }}
                onPress={() => props.navigation.goBack()}
                tintColor="white"
                label="Chats"
              />
            </>
          ),
          headerTitle: () => (
            <ChatScreenHeaderNavigator params={initialParams} />
          ),
          ...(initialParams?.type === "Room"
            ? {
                header: () => (
                  <NavigatorHeaderRoom
                    navigation={navigation}
                    stackNavigation={props.navigation}
                  />
                ),
              }
            : {}),
        })}
        initialParams={initialParams}
      />
    </DrawerStack.Navigator>
  );
}

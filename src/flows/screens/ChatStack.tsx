import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Chat, Message } from "../../pages/screens";
import { Theme } from "../../theme/app/constants/theme";
import { Text, View } from "react-native";
import { Userpic } from "react-native-userpic";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { EventRegister } from "react-native-event-listeners";
import { useSegmentListener } from "../../hooks";
import {
  ChatScreenHeaderNavigator,
  NavigatorHeaderRoom,
} from "../../components/import/index";
import { RoomDrawerNavigation } from "../../nested";

const Stack = createNativeStackNavigator();

export function ChatStackScreenNavigator() {
  const segmentValue = useSegmentListener();
  const effect = useEffect(() => {});

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"ChatListScreen"}
        options={({}) => ({
          title: segmentValue,
          headerLargeTitle: true,
          headerLargeStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },

          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerTitleStyle: {
            color: "white",
          },
          headerSearchBarOptions: {
            placeholder: "Search for someone",
            headerIconColor: "white",
            textColor: "white",
            tintColor: "white",
          },
          headerShown: true,
          headerLargeTitleShadowVisible: true,
          autoHideHomeIndicator: true,
          headerTitle: () => (
            <SegmentedControl
              values={["Chats", "Rooms"]}
              style={{
                width: 200,
                alignSelf: "center",
              }}
              onValueChange={(value) =>
                EventRegister.emit("ValueChanged", value)
              }
              tintColor="#474747"
              fontStyle={{ color: "gray" }}
              activeFontStyle={{
                color: "white",
              }}
            />
          ),
        })}
        component={Chat}
      />

      <Stack.Screen
        name={"Messages"}
        component={RoomDrawerNavigation}
        options={({ route, navigation }: any) => ({
          headerBackVisible: route.params.type === "Room" ? false : true,
          headerTintColor: "white",
          headerShown: false,
          headerTitle: () => (
            <>
              {route.params.type === "Room" ? (
                <></>
              ) : (
                <ChatScreenHeaderNavigator params={route.params} />
              )}
            </>
          ),

          headerRight: () =>
            route.params.type === "Room" ? (
              <></>
            ) : (
              <Userpic
                source={{
                  uri: route.params.image,
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
            ),
        })}
      />
    </Stack.Navigator>
  );
}

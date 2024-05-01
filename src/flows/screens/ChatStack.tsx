import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Chat, Message } from "../../pages/screens";
import { Theme } from "../../theme/app/constants/theme";
import { Appearance, Text, View } from "react-native";
import { Userpic, Badge } from "react-native-userpic";

const Stack = createNativeStackNavigator();

export function ChatStackScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"ChatListScreen"}
        options={({}) => ({
          title: "Chats",
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
          headerSearchBarOptions: {
            placeholder: "Search for someone",
            headerIconColor: "white",
            textColor: "white",
            tintColor: "white",
          },
        })}
        component={Chat}
      />

      <Stack.Screen
        name={"Messages"}
        component={Message}
        options={({ route }: any) => ({
          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerTintColor: "white",
          headerTitle: () => (
            <>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  {route.params?.name}
                </Text>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 13,
                  }}
                >
                  {"Online"}
                </Text>
              </View>
            </>
          ),
          headerRight: () => (
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

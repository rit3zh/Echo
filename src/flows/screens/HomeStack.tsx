import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Post } from "../../pages/screens";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { View, TouchableHighlight, Text } from "react-native";
import { Theme } from "../../theme/app/constants/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { HeaderBackButton } from "@react-navigation/elements";

const Stack = createNativeStackNavigator();

export function HomeStackScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        component={Home}
        options={({ navigation }) => ({
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

          headerRight: () => (
            <React.Fragment>
              <TouchableHighlight onPress={() => navigation.navigate("Post")}>
                <FontAwesome6 name="plus" size={24} color="white" />
              </TouchableHighlight>
            </React.Fragment>
          ),
        })}
      />

      <Stack.Screen
        name={"Post"}
        component={Post}
        options={({ navigation }) => ({
          presentation: "formSheet",
          headerLargeTitle: false,
          headerLargeStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          title: "Post",
          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerLeft: () => (
            <HeaderBackButton
              tintColor="white"
              label="Explore"
              labelStyle={{ fontSize: 18 }}
              onPress={() => navigation.goBack()}
            />
          ),

          headerRight: () => (
            <TouchableHighlight>
              <Text
                style={{ color: "white", fontSize: 15.4, fontWeight: "500" }}
              >
                Publish
              </Text>
            </TouchableHighlight>
          ),

          headerTitleStyle: {
            color: Theme.dark.title,
          },
        })}
      />
    </Stack.Navigator>
  );
}

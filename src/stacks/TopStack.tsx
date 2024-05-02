import * as React from "react";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const heightStatus = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Home!</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
function AppStack() {
  return (
    <Tab.Navigator
      style={{ marginTop: heightStatus }} //add this
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export function TopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MaterialTopStack"
        component={HomeScreen}
        options={{
          headerTitle: "Title",
          headerLargeTitle: false,
          headerBackground: () => (
            <SafeAreaView>
              <SegmentedControl values={["One", "Two"]} />
            </SafeAreaView>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

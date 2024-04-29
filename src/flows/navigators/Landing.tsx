import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp, SignIn, LandingScreen } from "../../pages/screens/index";

const Stack = createNativeStackNavigator();

export function LandingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Landing"}
        options={{ headerShown: false }}
        component={LandingScreen}
      />

      <Stack.Screen
        name={"SignUp"}
        component={SignUp}
        options={{
          presentation: "formSheet",
        }}
      />
      <Stack.Screen name={"SignIn"} component={SignIn} options={{}} />
    </Stack.Navigator>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack, Drawer } from "../../stacks";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <AppStack /> */}
        <Drawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

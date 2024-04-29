import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack, Drawer } from "../../stacks";

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      <Drawer />
    </NavigationContainer>
  );
}

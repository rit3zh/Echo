import React from "react";
import { Drawer } from "../../stacks";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";

export default function Navigation() {
  return (
    <NavigationContainer
      theme={{ colors: { background: "#000000" } as any } as any}
    >
      {/* <AppStack /> */}
      <Drawer />
    </NavigationContainer>
  );
}

import * as React from "react";
import { NavigationController } from "./src/navigation";
import * as SystemUI from "expo-system-ui";
import { LogBox } from "react-native";
import { enableScreens } from "react-native-screens";

enableScreens();
SystemUI.setBackgroundColorAsync("black");
LogBox.ignoreAllLogs(true);
export default function App(): JSX.Element & React.ReactNode {
  return (
    <React.Fragment>
      <NavigationController />
    </React.Fragment>
  );
}

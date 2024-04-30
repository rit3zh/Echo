import * as React from "react";
import { NavigationController } from "./src/navigation";
import * as SystemUI from "expo-system-ui";

SystemUI.setBackgroundColorAsync("black");
export default function App(): JSX.Element & React.ReactNode {
  return (
    <React.Fragment>
      <NavigationController />
    </React.Fragment>
  );
}

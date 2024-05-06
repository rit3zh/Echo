import * as React from "react";
import { Application } from "./src/start";
import { NavigationController } from "./src/navigation";

Application.initialize();

export default function App(): JSX.Element & React.ReactNode {
  return (
    <React.Fragment>
      <NavigationController />
    </React.Fragment>
  );
}

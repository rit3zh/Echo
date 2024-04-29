import * as React from "react";
import { NavigationController } from "./src/navigation";

export default function App(): JSX.Element & React.ReactNode {
  return (
    <React.Fragment>
      <NavigationController />
    </React.Fragment>
  );
}

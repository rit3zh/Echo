import * as SystemUI from "expo-system-ui";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);

export default class Application {
  public static initialize(): void {
    LogBox.ignoreAllLogs(true);
    SystemUI.setBackgroundColorAsync("black");
  }
}

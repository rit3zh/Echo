// @React & React-Native
import { SafeAreaView, ScrollView } from "react-native";
import React from "react";

// @Constant
import { Theme } from "../../../theme/app/constants/theme";
// @Components
import { ScreenTimeout } from "../../../components/import/index";
import { SettingsProps } from "../../../constants/screens/settings/SettingsProps";

export function Settings() {
  return (
    <ScreenTimeout timeout={2000}>
      <SafeAreaView
        style={{
          backgroundColor: Theme.dark.backgroundColor,
          flex: 1,
        }}
      >
        <ScrollView
          style={{
            bottom: 30,
            marginBottom: 10,
          }}
        >
          <SettingsProps />
        </ScrollView>
      </SafeAreaView>
    </ScreenTimeout>
  );
}

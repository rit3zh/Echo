import { View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateGroup, MessageDisappear } from "../../pages/screens";
import { Theme } from "../../theme/app/constants/theme";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { HeaderBackButton } from "@react-navigation/elements";

const { Navigator, Screen } = createNativeStackNavigator();

export function CreateGroupStack() {
  return (
    <Navigator>
      <Screen
        name="CreateGroupScreen"
        component={CreateGroup}
        options={{
          title: "Group",
          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerTitleStyle: {
            color: "white",
          },
          headerLeft: () => (
            <View
              style={{
                right: 15,
              }}
            >
              <DrawerToggleButton tintColor="white" />
            </View>
          ),
        }}
      />

      <Screen
        name="MessageDisappear"
        component={MessageDisappear}
        options={({ route, navigation }) => ({
          presentation: "formSheet",
          title: "Disappearing Messages",
          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerLeft: () => (
            <HeaderBackButton
              canGoBack={true}
              onPress={() => navigation?.goBack()}
              style={{
                right: 10,
                marginRight: 10,
              }}
              tintColor="white"
            />
          ),
          headerTitleStyle: {
            color: "white",
          },
        })}
      />
    </Navigator>
  );
}

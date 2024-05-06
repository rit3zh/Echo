import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Notifications } from "../../pages/screens";
import { Theme } from "../../theme/app/constants/theme";
import { DrawerToggleButton } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();

export function NotificationNavigator() {
  return (
    <React.Fragment>
      <Stack.Navigator>
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: Theme.dark.backgroundColor,
            },
            headerLargeTitle: true,
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
      </Stack.Navigator>
    </React.Fragment>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { MessageDisappear, CustomTime } from "../../pages/screens/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Theme } from "../../theme/app/constants/theme";
import { HeaderBackButton } from "@react-navigation/elements";
const Stack = createNativeStackNavigator();

const OptionsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessageDisappear"
        component={MessageDisappear}
        options={({ route, navigation }) => ({
          presentation: "formSheet",
          title: "Disappearing Messages",
          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerTitleStyle: { color: "white" },
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
        })}
      />

      <Stack.Screen
        name="CustomTime"
        component={CustomTime}
        options={{
          headerBackTitle: "Back",
          headerStyle: {
            backgroundColor: Theme.dark.backgroundColor,
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
          headerRight: () => (
            <View>
              <Text style={{ color: "white", fontSize: 16 }}>Set</Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default OptionsNavigator;

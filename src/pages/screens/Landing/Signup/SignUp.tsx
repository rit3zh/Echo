import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export function SignUp({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          navigation.navigate("SignIn");
        }}
      >
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

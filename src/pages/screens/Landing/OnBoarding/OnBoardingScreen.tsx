import * as React from "react";
import { View, SafeAreaView, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Styles } from "./styles";
import { NativeBaseProvider, Button } from "native-base";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

export function LandingScreen({ navigation }: NativeStackHeaderProps) {
  const onPress = (): any | void => {
    return navigation.navigate("SignUp");
  };
  return (
    <React.Fragment>
      <NativeBaseProvider>
        <SafeAreaView style={Styles.container}>
          <View>
            <View style={Styles.logoContainer}>
              <Image
                style={Styles.logo}
                source={require("../../../../assets/chat_app_logo_light.png")}
              />
            </View>
            <View style={Styles.buttonContainer}>
              <Button
                onPress={onPress}
                leftIcon={<AntDesign name="dingding" size={24} color="black" />}
                style={Styles.buttonStyle}
              >
                <Text style={Styles.text}>Sign Up</Text>
              </Button>
            </View>
          </View>

          <View style={Styles.graphicElementBottomRight} />
          <View style={Styles.graphicElementTopLeft} />
        </SafeAreaView>
        <StatusBar animated={true} style="light" />
      </NativeBaseProvider>
    </React.Fragment>
  );
}

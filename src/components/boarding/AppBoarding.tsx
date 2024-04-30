import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { OnboardFlow } from "react-native-onboard";
import { Fonts, useInitialFonts } from "../../hooks/custom/useFont";

const AppBoarding = () => {
  const FontLoaded = useInitialFonts();
  return (
    <View style={styles.container}>
      <OnboardFlow
        enableScroll={true}
        pages={[
          {
            title: "Welcome to Echo",
            titleStyle: {
              fontFamily: FontLoaded ? Fonts.Circular : null,
            },
            subtitle: "Where Conversations Thrive, Together or Alone.",
            subtitleStyle: {
              fontSize: 19,
            },

            imageUri: Image.resolveAssetSource(
              require("../../assets/chat_app_logo_dark.png")
            ).uri,
          },
          {
            title: "Group Chats",
            subtitle:
              "Connect with friends, family, and colleagues in vibrant group chats.",
            subtitleStyle: {
              fontSize: 16,
            },
            titleStyle: {
              fontFamily: FontLoaded ? Fonts.Circular : null,
            },
            imageUri: Image.resolveAssetSource(
              require("../../assets/undraw_Group_chat_re_frmo.png")
            ).uri,
          },
          {
            title: "Personal Chats",
            subtitle:
              "Connect one-on-one with friends and loved ones, privately and seamlessly.",
            subtitleStyle: {
              fontSize: 16,
            },
            imageUri: Image.resolveAssetSource(
              require("../../assets/undraw_Chatting_re_j55r.png")
            ).uri,
            titleStyle: {
              fontFamily: FontLoaded ? Fonts.Circular : null,
            },
          },
        ]}
        type="bottom-sheet"
      />
    </View>
  );
};

export default AppBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

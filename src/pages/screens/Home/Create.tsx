import React, { useRef, useState } from "react";
import {
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Platform,
  Text,
} from "react-native";
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from "rn-material-ui-textfield";

// React Native UI DevKit
import {
  List,
  TitleFontSize,
  IButtonProps,
  ICardProps,
  IActionProps,
} from "react-native-ui-devkit";
import { Theme } from "../../../theme/app/constants/theme";
import { Userpic } from "react-native-userpic";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ProfileComponent } from "../../../components/import";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { NativeBaseProvider, Button } from "native-base";
import { Fonts, useInitialFonts } from "../../../hooks";
const { width, height } = Dimensions.get("window");

export const CreateGroup = (props: NativeStackHeaderProps) => {
  React.useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <>
          <Text style={{ color: "white" }}>Create</Text>
        </>
      ),
    });
  }, []);

  const [data, setData] = useState({ username: "", password: "" });

  const _button: IButtonProps = {
    onPress: () => {},
    title: "Create",
  };

  const Component = () => (
    <React.Fragment>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="google-circles-group"
          size={24}
          color="#bfbfbf"
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <TextInput
            placeholder="Group Name (Required)"
            placeholderTextColor={"#4d4d4d"}
          />
        </View>
      </View>
    </React.Fragment>
  );

  const MessagePresentationComponent = () => (
    <React.Fragment>
      <View style={{ flexDirection: "row" }}>
        <Ionicons name="timer-outline" size={24} color="#bfbfbf" />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 14 }}>
            Disappearing Message
          </Text>
        </View>
      </View>
    </React.Fragment>
  );

  const _profile: Array<ICardProps & IActionProps> = [
    {
      chevron: false,
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
        height: 58,
        justifyContent: "center",
        alignItems: "center",
      },
      component: <Component />,

      onPress: () => {},
    },
  ];

  const _disappearingMessages: Array<ICardProps & IActionProps> = [
    {
      chevron: true,
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
      },

      component: <MessagePresentationComponent />,

      onPress: () => props.navigation.navigate("OptionsNavigator"),
    },
  ];

  const FontLoaded = useInitialFonts();

  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/e2/61/02/e2610215a9ca48ef99df39d1deff321c.jpg",
            }}
            style={styles.banner}
          />

          <View style={styles.iconContainer}>
            <Userpic
              size={120}
              source={{
                uri: "https://i.pinimg.com/736x/ed/ab/d5/edabd56db9532681d6ee0b58dbca7f74.jpg",
              }}
              style={styles.icon}
            />
          </View>
          <List
            data={_profile}
            marginTop={true}
            footer="You can add your friends to this group."
          />
          <List
            data={_disappearingMessages}
            marginTop={false}
            footer="Set an automatic expiration time for Chat Room Messages."
          />
          <View style={styles.buttonContainer}>
            <Button
              leftIcon={
                <View
                  style={{
                    marginRight: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Octicons name="share" size={22} color="white" style={{}} />
                </View>
              }
              style={styles.button}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    fontFamily: FontLoaded ? Fonts.CircularNormal : null,
                  },
                ]}
              >
                Invite Friends
              </Text>
            </Button>
          </View>
        </View>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,

    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    fontSize: 15,
    color: "white",
  },
  button: {
    backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    borderRadius: 9999,
  },
  textinputContainer: {
    width: width - 40,
    marginTop: 20,
  },
  container: {
    backgroundColor: Theme.dark.backgroundColor,
    flex: 1,
  },
  bannerContainer: {},
  banner: {
    aspectRatio: 16 / 5,
    width,
  },
  iconContainer: {
    bottom: 20,
  },
  icon: {},
  textinput: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

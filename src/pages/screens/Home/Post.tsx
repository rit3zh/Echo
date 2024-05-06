import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Theme } from "../../../theme/app/constants/theme";
import { User } from "react-native-gifted-chat";
import { Userpic } from "react-native-userpic";
import { responsiveWidth } from "react-native-responsive-dimensions";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Fab, NativeBaseProvider } from "native-base";
import { ContextMenuButton } from "react-native-ios-context-menu";

export function Post() {
  const [user, setUser] = useState<User>({
    _id: 1,
    name: "rit3zh",
    avatar: "https://avatars.githubusercontent.com/u/119659853?v=4",
  });
  return (
    <NativeBaseProvider>
      <Fab
        renderInPortal={false}
        shadow={10}
        right={10}
        bgColor={"white"}
        bottom={120}
        icon={<Entypo name="folder-images" size={24} color="black" />}
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.card}>
            <View style={styles.userinfo}>
              <Userpic
                badge={true}
                source={{
                  uri: user.avatar as string,
                }}
                badgeProps={{
                  size: 22,
                  position: "bottom-right",
                  style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: "#04c437",
                  },
                  textStyle: {
                    marginHorizontal: 0,
                  },
                }}
                style={styles.userImage}
              />
              <View style={styles.userInfoText}>
                <Text style={styles.username}>{user.name}</Text>
                <ContextMenuButton
                  isMenuPrimaryAction={true}
                  menuConfig={{
                    menuTitle: "Post Type",
                    menuItems: [
                      {
                        actionKey: "key-01",
                        actionTitle: "Public",
                        icon: {
                          type: "IMAGE_SYSTEM",
                          imageValue: {
                            systemName: "globe.americas",
                          },
                        },
                      },
                      {
                        actionKey: "key-02",
                        actionTitle: "Private",
                        icon: {
                          type: "IMAGE_SYSTEM",
                          imageValue: {
                            systemName: "bell.badge.slash",
                          },
                        },
                      },
                    ],
                  }}
                >
                  <View style={styles.ownerBackground}>
                    <MaterialIcons
                      name="public"
                      size={18}
                      color="gray"
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.roomOwner}>{"Public"}</Text>
                    <MaterialCommunityIcons
                      name="menu-down"
                      size={24}
                      color="gray"
                    />
                  </View>
                </ContextMenuButton>
              </View>
            </View>
            <View style={styles.searchContainerStyle}>
              <Ionicons
                name="chatbubbles"
                size={24}
                color="#f5f5f5"
                style={{ marginTop: 5 }}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <TextInput
                  multiline
                  placeholder={`What's on your mind ${user.name}?`}
                  placeholderTextColor={"gray"}
                  cursorColor={"white"}
                  style={{ color: "white", fontSize: 19 }}
                  selectionColor={"white"}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.dark.backgroundColor,
  },
  contentContainer: {
    padding: 15,
    borderRadius: 5,
  },
  card: {
    marginBottom: 20,
    borderRadius: 20,
  },
  userinfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 2,
  },
  userInfoText: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  roomOwner: {
    color: "gray",
    fontSize: 15,
  },
  description: {
    fontSize: 14,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },
  bannerView: {
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    marginTop: 15,
    maxWidth: responsiveWidth(80),
    aspectRatio: 16 / 5,
    width: "100%",
  },
  interactionWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  interaction: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    padding: 5,
  },
  interactionText: {
    marginTop: 5,
    marginLeft: 5,
    color: "white",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
    alignSelf: "center",
    marginTop: 15,
    width: "92%",
  },
  ownerBackground: {
    flexDirection: "row",
    top: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  leftSideContainer: {
    justifyContent: "flex-start",
    width: "90%",
  },
  searchContainerStyle: {
    borderRadius: 30.0,
    height: Dimensions.get("window").height,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
});

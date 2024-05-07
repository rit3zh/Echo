import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import type { Rooms } from "../../../interfaces";
import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ContextMenuView } from "react-native-ios-context-menu";
import { Userpic } from "react-native-userpic";

interface Props extends Rooms {
  index?: number;
  length?: number;
}

const ExploreRooms: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <ContextMenuView
        menuConfig={{
          // Note: If you don't want a menu title to appear for your
          // context menu, you can just pass in an empty string
          menuTitle: "",

          menuItems: [
            {
              actionKey: "key-01",
              actionTitle: "Favorite",
              icon: {
                type: "IMAGE_SYSTEM",
                imageValue: {
                  systemName: "star.fill",
                },
                imageOptions: {
                  renderingMode: "alwaysOriginal",
                  tint: "#FFEA00",
                },
              },
            },
            {
              actionKey: "key-02",
              actionTitle: "Remove",
              icon: {
                type: "IMAGE_SYSTEM",
                imageOptions: {
                  renderingMode: "alwaysOriginal",
                  tint: "#D50000",
                },
                imageValue: {
                  systemName: "minus.circle.fill",
                },
              },
            },
            {
              actionKey: "key-03",
              actionTitle: "Join",
              icon: {
                type: "IMAGE_SYSTEM",
                imageOptions: {
                  renderingMode: "alwaysOriginal",
                  tint: "#1B5E20",
                },
                imageValue: {
                  systemName: "rectangle.portrait.and.arrow.right.fill",
                },
              },
            },
          ],
        }}
      >
        <View style={styles.card}>
          <View style={styles.userinfo}>
            <Userpic
              badge={true}
              source={{
                uri: props.icon,
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
              <Text style={styles.username}>{props.name}</Text>
              <View style={styles.ownerBackground}>
                <Text style={styles.roomOwner}>{props.owner.name}</Text>
              </View>
            </View>
            <View style={styles.leftSideContainer}>
              <Userpic
                source={{
                  uri: props.owner.icon.url,
                }}
                size={50}
                radius={7.5}
              />
            </View>
          </View>
          <Text style={styles.description}>{props.description}</Text>
          <View style={styles.bannerView}>
            <Image source={{ uri: props.banner }} style={styles.banner} />
          </View>

          <View style={styles.divider} />
          <View style={styles.interactionWrapper}>
            <View style={styles.interaction}>
              <AntDesign name="login" size={24} color="#4ade80" />
            </View>
            <View style={styles.interaction}>
              <AntDesign name="staro" size={24} color="#fde047" />
            </View>
            <View style={styles.interaction}>
              <Entypo name="cross" size={24} color="#ef4444" />
            </View>
          </View>
        </View>
      </ContextMenuView>
    </View>
  );
};

export default ExploreRooms;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 5,
  },
  card: {
    marginBottom: 20,
    borderRadius: 20,

    backgroundColor: "#0a0a0a",
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
  },
  leftSideContainer: {
    justifyContent: "flex-start",
    width: "90%",
  },
});

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  type DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { List, IItemProps } from "react-native-ui-devkit";

import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Member, TotalMembers } from "../../../constants";
import { Userpic } from "react-native-userpic";
import { responsiveWidth } from "react-native-responsive-dimensions";

export const DrawerRightSideActions: React.FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps
) => {
  const Component: React.FC<Member> = ({
    image,
    name,
    isAdmin,
    memberSince,
  }: Member) => (
    <>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{}}>
            <Userpic
              size={40}
              source={{
                uri: image,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 220,
            }}
          >
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <View>
                <Text
                  style={{ color: "white", fontSize: 15, maxWidth: 180 }}
                  numberOfLines={1}
                >
                  {name}
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 2 }}>
                {isAdmin ? (
                  <>
                    <MaterialIcons
                      style={{ marginRight: 5 }}
                      name="admin-panel-settings"
                      size={18}
                      color="gray"
                    />
                    <Text style={{ color: "gray", fontSize: 13 }}>
                      {isAdmin ? "Admin" : "Member"}
                    </Text>
                  </>
                ) : (
                  <>
                    <Feather
                      name="user"
                      size={17}
                      color="gray"
                      style={{ marginRight: 5 }}
                    />
                    <Text style={{ color: "gray", fontSize: 13 }}>
                      {isAdmin ? "Admin" : "Member"}
                    </Text>
                  </>
                )}
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="dots-vertical"
                size={19}
                color="white"
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
  const _items: Array<IItemProps> = TotalMembers.map((m, i) => ({
    color: { title: "white" },

    style: {
      backgroundColor: "black",
    },
    description: "this isa amind",

    component: <Component {...m} />,
  }));

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        contentContainerStyle={{
          backgroundColor: "black",
        }}
        {...props}
      >
        <View
          style={{
            flex: 1,

            paddingTop: 10,
            backgroundColor: "black",
          }}
        >
          <View style={styles.titleContainer}>
            <Ionicons
              name="arrow-back"
              style={{ left: 10 }}
              size={24}
              color="white"
            />
            <Text style={styles.title}>Total Members</Text>
          </View>
          {TotalMembers.map((v, i) => (
            <View
              style={{ justifyContent: "center", alignItems: "center" }}
              key={`_${i}_${v.name}`}
            >
              <Component {...v} />
            </View>
          ))}
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingLeft: 5,
          }}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  textName: {
    color: "white",
    fontSize: 15,
  },
  descriptivetext: {
    color: "gray",
    fontSize: 12,
  },
  titleContainer: {
    justifyContent: "space-between",
    width: responsiveWidth(50),
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

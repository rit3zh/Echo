import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  type DrawerContentComponentProps,
} from "@react-navigation/drawer";
import {
  RNUIDevKitProvider,
  ICardProps,
  Item,
  TitleFontSize,
  useColors,
  Icon,
} from "react-native-ui-devkit";
import { AntDesign } from "@expo/vector-icons";
import DrawerHeader from "./DrawerHeader";

const CustomDrawer: React.FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps
) => {
  const colors = useColors();

  return (
    <RNUIDevKitProvider>
      <View style={styles.container}>
        <DrawerContentScrollView
          contentContainerStyle={{
            backgroundColor: "black",
          }}
          {...props}
        >
          <DrawerHeader onPress={() => props.navigation.closeDrawer()} />

          <Item
            style={{
              backgroundColor: "transparent",
              right: 10,
              marginBottom: 5,
              bottom: 10,
            }}
            data={{
              component: (
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://github.com/reactnativeuidevkit/react-native-ui-devkit-layout/blob/main/static/img/avatar-1.png?raw=true",
                      }}
                      style={styles.avatarImage}
                    />
                    <View
                      style={{
                        justifyContent: "center",
                        flexDirection: "column",
                        margin: 10,
                      }}
                    >
                      <Text style={styles.textName}>Ivor Fugler</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: 0,
                        }}
                      >
                        <Text style={styles.descriptivetext}>@fulger</Text>
                        <View
                          style={{
                            marginLeft: 5,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Icon
                            name="verified"
                            color="#007aff"
                            type="material"
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              ),
            }}
          />
          <View
            style={{
              flex: 1,

              paddingTop: 10,
              backgroundColor: "black",
            }}
          >
            <DrawerItemList {...props} />
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
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <AntDesign name="logout" size={22} color="white" />
              <View
                style={{
                  marginLeft: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                    color: "white",
                  }}
                >
                  Logout
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </RNUIDevKitProvider>
  );
};

export default CustomDrawer;

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
});

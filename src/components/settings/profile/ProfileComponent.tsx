import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Userpic } from "react-native-userpic";
import { Icon } from "react-native-ui-devkit";

const ProfileComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={{
            uri: "https://github.com/reactnativeuidevkit/react-native-ui-devkit-layout/blob/main/static/img/avatar-1.png?raw=true",
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.text}>Ivory James </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 0,
            }}
          >
            <Text style={styles.descriptiveText}>ivor@fugler.com</Text>
            <View
              style={{
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="verified" color="#007aff" type="material" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  content: {
    justifyContent: "center",
    flexDirection: "column",
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  descriptiveText: {
    color: "gray",
    fontSize: 12,
    marginTop: 1,
  },
});

import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

interface Props {
  onPress: () => void | any;
}

const HeaderRightNavigator: React.FC<Props> = ({ onPress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.interactionWrapper}>
        <View style={styles.interaction}>
          <Feather name="share-2" size={24} color="#a6a6a6" />
        </View>
        <View style={styles.interaction}>
          <Feather name="settings" size={24} color="#a6a6a6" />
        </View>
        <View style={styles.interaction}>
          <TouchableWithoutFeedback onPress={onPress}>
            <Feather name="menu" size={24} color="#a6a6a6" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default HeaderRightNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",
    right: 20,
    bottom: 10,
  },
  interactionWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  interaction: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
  },
});

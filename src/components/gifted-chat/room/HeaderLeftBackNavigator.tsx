import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
interface Props {
  onPress: () => void | any;
}

const HeaderLeftBackNavigator: React.FC<Props> = ({ onPress }: Props) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
          <MaterialIcons name="chevron-left" size={27} color={"white"} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.text}>
          The Watchers
        </Text>
      </View>
    </View>
  );
};

export default HeaderLeftBackNavigator;

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: "#383838",
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
  },
  flexContainer: {
    flexDirection: "row",
    marginBottom: 20,

    alignItems: "center",
    width: "100%",
    left: 10,
  },
  textContainer: {
    left: 12,
  },
  text: {
    fontSize: 28,
    maxWidth: 200,
    color: "white",
    fontWeight: "bold",
  },
  utilIcon: {},
});

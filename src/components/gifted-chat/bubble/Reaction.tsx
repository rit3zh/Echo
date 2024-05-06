import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
interface Options {
  position?: "left" | "right";
  reaction?: string;
}
const Reaction = ({ position, reaction }: Options) => {
  const emoji: string = reaction.toString();
  return (
    <View
      style={[
        styles.container,
        {
          alignItems: position === "left" ? "flex-start" : "flex-end",
          bottom: 10,
        },
      ]}
    >
      <View>
        <Text style={{ color: "white", fontSize: 20 }}>{emoji}</Text>
      </View>
    </View>
  );
};

export default Reaction;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    marginTop: 10,
  },
});

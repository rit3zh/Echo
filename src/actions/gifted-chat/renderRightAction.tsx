// @development
import { View, Text, Animated } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export function renderRightAction<T extends string | number>(
  progressAnimatedValue: Animated.AnimatedInterpolation<T>,
  whichMessage?: "left" | "right",
  time?: Date | number
) {
  const size = progressAnimatedValue.interpolate({
    outputRange: [0, 1, 1],
    inputRange: [0, 1, 100],
  });
  const translateX = progressAnimatedValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, -12, -20],
  });
  return (
    <Animated.View
      style={[
        {
          width: whichMessage === "right" ? 100 : "auto",
          borderRadius: 1,
        },
        {
          transform: [
            { scale: size },
            {
              translateX: translateX,
            },
          ],
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <Text style={{ color: "white", fontSize: 11 }}>{"1 day ago"}</Text>
      </View>
    </Animated.View>
  );
}

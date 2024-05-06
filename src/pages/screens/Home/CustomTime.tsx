import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { Fragment, useState } from "react";
import { Theme } from "../../../theme/app/constants/theme";
import { ICardProps, List, useColors } from "react-native-ui-devkit";
import { PickerIOS } from "@react-native-picker/picker";

// Constants
import * as Constants from "../../../constants/index";

// Custom Components
import { Component } from "../../../components/screens/individual/custom/Component";

export const CustomTime = () => {
  const colors = useColors();
  const [duration, setDuration] = useState<string>();
  const [time, setTime] = useState<number | string>();

  const _list: Array<ICardProps> = [
    {
      component: (
        <Component
          onTimeValueChange={(value) => setTime(value)}
          onValueChange={(value) => setDuration(value)}
          duration={duration}
          time={time}
        />
      ),
      style: {
        height: 200,
        justifyContent: "center",
        backgroundColor: colors.text,
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          top: 10,
        }}
      >
        <Text style={{ color: colors.secondary, fontSize: 12 }}>
          When turned on, messages sent in this chat will vanish after they're
          sent.
        </Text>
      </View>

      <List data={_list} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.dark.backgroundColor,
    flex: 1,
  },
});

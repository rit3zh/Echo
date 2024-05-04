import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { createContext, useState } from "react";
import { Theme } from "../../../theme/app/constants/theme";
import { IItemProps, Item, List, useColors } from "react-native-ui-devkit";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { createIcon } from "native-base";

export function MessageDisappear(props: NativeStackHeaderProps) {
  const colors = useColors();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () =>
        isSelected === true ? (
          <Text
            style={{
              color: "white",
            }}
          >
            Set
          </Text>
        ) : null,
    });
  }, [isSelected]);
  const [Times, setTimes] = useState([
    { value: "Off", isChecked: false },
    { value: "3 weeks", isChecked: false },
    { value: "1 week", isChecked: false },
    { value: "1 day", isChecked: false },
    { value: "8 hours", isChecked: false },
    { value: "1 hour", isChecked: false },
    { value: "10 minutes", isChecked: false },
    { value: "5 minutes", isChecked: false },
  ]);

  const handlePress = (value) => {
    const updatedTimes = Times.map((time) => ({
      ...time,
      isChecked: time.value === value,
    }));
    setTimes(updatedTimes);
    setIsSelected(true);
  };

  const _items: Array<IItemProps & any> = Times.map(({ value, isChecked }) => ({
    title: value,
    style: {
      backgroundColor: colors.ios.line,
    },
    color: {
      title: "white",
    },
    onPress: () => handlePress(value),
    chevron: false,
    ...(isChecked
      ? {
          icon: {
            name: "check",
            type: "feather",
            color: "white",
            size: "white",
            backgroundColor: "transparent",
          },
        }
      : {}),
  }));

  const _combinedItems: Array<IItemProps> = [
    ..._items,
    {
      title: "Custom Time",
      style: {
        backgroundColor: colors.ios.line,
      },
      color: {
        title: "white",
      },
      chevron: true,
      onPress: () => {},
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
      <List data={_combinedItems} separators={false} onpress={onpress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.dark.backgroundColor,
    flex: 1,
  },
});

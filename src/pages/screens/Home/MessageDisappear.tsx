import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Theme } from "../../../theme/app/constants/theme";
import { IItemProps, Item, List, useColors } from "react-native-ui-devkit";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { DisappearOptions } from "../../../constants";

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
  const [Times, setTimes] = useState(DisappearOptions);

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
      backgroundColor: colors.text,
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
        backgroundColor: colors.text,
      },
      color: {
        title: "white",
      },
      chevron: true,
      onPress: () => props.navigation.navigate("CustomTime"),
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
      <List data={_combinedItems} separators={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.dark.backgroundColor,
    flex: 1,
  },
});

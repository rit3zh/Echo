import { View, Text } from "react-native";
import React from "react";
import { AppleStyle } from "react-native-scrollable-navigation-bar";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const CustomHeader: React.FC<Props> = ({ children, title }: Props) => {
  return (
    <>
      <AppleStyle title={title} headerHeight={150} style={{}} />
      {children}
    </>
  );
};

export default CustomHeader;

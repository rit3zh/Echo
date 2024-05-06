import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import { Theme } from "../../theme/app/constants/theme";
import Animated, { FadeIn } from "react-native-reanimated";

interface Props {
  children: ReactNode;
  timeout?: number;
  backgroundColor?: string;
}

const ScreenTimeout: React.FC<Props> = ({
  children,
  timeout,
  backgroundColor,
}: Props): JSX.Element & React.ReactNode => {
  const [isScreenVisible, setIsScreenVisible] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsScreenVisible(true);
    }, timeout as number);
  }, []);
  const LoadingScreen = () => (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
    </View>
  );
  const AnimatedView = () => (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor:
          typeof backgroundColor !== "string" ? "#fff" : backgroundColor,
      }}
      entering={FadeIn}
    >
      {children}
    </Animated.View>
  );
  return (
    <React.Fragment>
      {!isScreenVisible ? <LoadingScreen /> : <AnimatedView />}
    </React.Fragment>
  );
};

export default ScreenTimeout;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: Theme.dark.backgroundColor,
  },
});

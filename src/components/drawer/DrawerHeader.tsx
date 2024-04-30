import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Fonts, useInitialFonts } from "../../hooks/custom/useFont";

interface Props {
  onPress: () => any;
  color?: string;
}
const DrawerHeader: React.FC<Props> = ({
  color,
  onPress,
}: Props): JSX.Element => {
  const FontLoaded = useInitialFonts();

  return (
    <React.Fragment>
      <View>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <TouchableWithoutFeedback onPress={onPress}>
              <Ionicons
                name="close"
                size={24}
                color={!color ? "white" : color}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                {
                  fontFamily: FontLoaded ? Fonts.CircularNormal : null,
                },
              ]}
            >
              Menu
            </Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",

    alignItems: "center",
  },
  iconContainer: {
    left: 10,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "white",
  },
});

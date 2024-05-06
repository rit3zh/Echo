import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Theme } from "../../../theme/app/constants/theme";
import { responsiveHeight } from "react-native-responsive-dimensions";
interface Props {
  onValueChange?: (text?: string) => any | void;
  username?: string;
  value?: number;
  onSendPress: () => any | void;
  text?: string;
}

const InputToolBar: React.FC<Props> = ({
  onValueChange,
  username,
  value,
  onSendPress,
  text,
}: Props) => {
  const TextInputColor: string = `#383838`;

  return (
    <SafeAreaView
      style={{
        backgroundColor: Theme.dark.backgroundColor,

        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          bottom: value,
        }}
      >
        <View
          style={{
            marginLeft: 20,
            backgroundColor: TextInputColor,
            borderRadius: 9999,
            width: 45,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="image" size={20} color="#f5f5f5" />
        </View>
        <View
          style={{
            backgroundColor: TextInputColor,
            borderRadius: 30.0,
            height: responsiveHeight(5),
            flexDirection: "row",
            alignItems: "center",
            width: Dimensions.get("window").width - 90,
            marginRight: 15,
          }}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              cursorColor={"white"}
              selectionColor={"white"}
              placeholder={`Send a message to ${username}`}
              style={{
                marginLeft: 20,
                maxWidth: 250,
                color: "white",
              }}
              value={text}
              onChangeText={onValueChange}
              placeholderTextColor={"#F5F5F5"}
            />
          </View>
          <Pressable onPress={onSendPress}>
            <View
              style={{
                backgroundColor: "#262626",
                borderRadius: 9999,
                width: 45,
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 5,
              }}
            >
              <Feather name="send" size={20} color="#f5f5f5" />
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InputToolBar;

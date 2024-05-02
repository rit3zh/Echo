import { View, Text, TextInput, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../../../theme/app/constants/theme";
interface Props {
  onValueChange?: (text?: string) => any | void;
  username?: string;
  value?: number;
}

const InputToolBar: React.FC<Props> = ({
  onValueChange,
  username,
  value,
}: Props) => {
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
            marginLeft: 5,
          }}
        >
          <Ionicons name="add" size={30} color="#F5F5F5" />
        </View>
        <View
          style={{
            backgroundColor: "#121212",
            borderRadius: 30.0,
            height: 32.0,
            flexDirection: "row",
            alignItems: "center",
            width: Dimensions.get("window").width - 90,
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
              placeholderTextColor={"#F5F5F5"}
            />
          </View>
        </View>
        <View
          style={{
            marginRight: 5,
          }}
        >
          <Ionicons name="arrow-forward-circle" size={30} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InputToolBar;

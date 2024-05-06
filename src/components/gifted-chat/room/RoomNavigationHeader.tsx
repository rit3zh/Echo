import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Header } from "@react-navigation/elements";
import { Theme } from "../../../theme/app/constants/theme";
import HeaderLeftBackNavigator from "./HeaderLeftBackNavigator";
import HeaderRightNavigator from "./HeaderRightNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
interface Props {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
  stackNavigation?: NativeStackNavigationProp<ParamListBase, string, undefined>;
}
const NavigatorHeaderRoom: React.FC<Props> = ({
  navigation,
  stackNavigation,
}: Props) => {
  const MainColor: string = `#383838`;

  return (
    <React.Fragment>
      <SafeAreaView>
        <Header
          title=""
          headerStyle={{
            borderBottomWidth: 1,
            borderBottomColor: MainColor,
            backgroundColor: Theme.dark.backgroundColor,
          }}
          headerStatusBarHeight={20}
          headerLeft={() => (
            <HeaderLeftBackNavigator onPress={() => stackNavigation.goBack()} />
          )}
          headerRight={() => (
            <HeaderRightNavigator onPress={() => navigation.toggleDrawer()} />
          )}
        />
      </SafeAreaView>
    </React.Fragment>
  );
};

export default NavigatorHeaderRoom;

const styles = StyleSheet.create({});

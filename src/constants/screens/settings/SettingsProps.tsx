// @Constant
import { Theme } from "../../../theme/app/constants/theme";
import { Constants } from "../../../constants/index";

// @DevKit
import {
  ICardProps,
  List,
  IActionProps,
  ISwitchProps,
  Button,
  IButtonProps,
} from "react-native-ui-devkit";

// @Components
import {
  CustomDescriptiveText,
  ProfileComponent,
} from "../../../components/import/index";
import { TouchableWithoutFeedback } from "react-native";

export function SettingsProps(): JSX.Element {
  const _profile: Array<ICardProps & IActionProps> = [
    {
      component: <ProfileComponent />,
      chevron: true,
      style: {
        height: 90,
        justifyContent: "center",
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
      onPress: () => {},
    },

    {
      title: "Profile Card",
      color: { title: "white", description: "gray" },
      onPress: async () => {},
      icon: {
        name: "sparkles",
        type: "ionicons",
        backgroundColor: "transparent",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
    },
  ];

  const _notifications: Array<IActionProps & ISwitchProps> = [
    {
      title: "Email Notification",
      color: { title: "white", description: "gray" },
      switch: {
        value: true,
        disabled: false,
        onValueChange: () => {},
      },
      onPress: async () => {},
      icon: {
        name: "mail",
        type: "ionicons",
        backgroundColor: "#12b01c",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
    },

    {
      title: "In App Notifications",
      color: { title: "white", description: "gray" },
      switch: {
        value: true,
        disabled: false,
        onValueChange: () => {},
      },
      onPress: async () => {},
      icon: {
        name: "open-in-app",
        type: "material-community",
        backgroundColor: "#38a165",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
    },

    {
      title: "Push Notifications",
      color: { title: "white", description: "gray" },
      switch: {
        value: true,
        disabled: false,
        onValueChange: () => {},
      },
      onPress: async () => {},
      icon: {
        name: "notifications",
        type: "ionicons",
        backgroundColor: "#37a148",
        size: 20,
        color: "#fafafa",
      },
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
    },

    {
      title: "Sound",
      color: { title: "white", description: "gray" },

      onPress: async () => {},
      icon: {
        name: "musical-notes",
        type: "ionicons",
        backgroundColor: "#ff3b30",
        size: 20,
        color: "#fafafa",
      },
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
    },
  ];

  const _list: Array<IActionProps & ISwitchProps> = [
    {
      title: "Language",
      color: { title: "white", description: "gray" },
      description: "English",
      onPress: async () => {},
      icon: {
        name: "globe-outline",
        type: "ionicons",
        backgroundColor: "#ff9500",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
    },

    {
      title: "Dark Mode",
      color: { title: "white", description: "gray" },
      switch: {
        value: true,
        disabled: false,
        onValueChange: () => {},
      },
      onPress: async () => {},
      icon: {
        name: "moon",
        type: "ionicons",
        backgroundColor: "#007aff",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
    },

    {
      title: "Starred Messages",
      color: { title: "white", description: "gray" },
      onPress: async () => {},
      icon: {
        name: "star",
        type: "entypo",
        backgroundColor: "#07a607",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
    },
  ];

  const _button: IButtonProps = {
    title: "Logout",
    onPress: () => {},
    style: {
      backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
    },
  };

  const _resources: Array<IActionProps & ISwitchProps> = [
    {
      title: "Github",
      color: { title: "white", description: "gray" },
      onPress: async () => {},
      icon: {
        name: "github",
        type: "antdesign",
        backgroundColor: "transparent",
        size: 20,
        color: "white",
      },
      style: {
        backgroundColor: Theme.dark.screens.settings.profileCardBackgroundColor,
      },
    },
  ];
  return (
    <>
      <TouchableWithoutFeedback>
        <List header="profile" data={_profile} marginTop={true} />
      </TouchableWithoutFeedback>

      <List header="Preference" data={_list} />
      <List header="Notifications" data={_notifications} />
      <List header="Resources" data={_resources} />
      <Button data={_button} destructive={true} />
      <CustomDescriptiveText
        content={Constants.App.Text.DescriptiveEndCreditsText}
      />
    </>
  );
}

import { SafeAreaView } from "react-native";
import React from "react";
import {
  type OnPressMenuItemEventObject,
  ContextMenuView,
} from "react-native-ios-context-menu";
import { MENU_PROPS } from "../../../constants/context-menu/Config";
import { Bubble, type IMessage } from "react-native-gifted-chat";

interface Props {
  onMenuPress?: (nativeEvent: OnPressMenuItemEventObject) => any | void;
  initialBubbleProps?: Bubble<IMessage>["props"];
}

const GiftedChatBubble: React.FC<Props> = ({
  onMenuPress,
  initialBubbleProps,
}: Props) => {
  return (
    <SafeAreaView
      style={{
        marginBottom: 20,
      }}
    >
      <ContextMenuView {...MENU_PROPS} onPressMenuItem={onMenuPress}>
        <Bubble {...initialBubbleProps} />
      </ContextMenuView>
    </SafeAreaView>
  );
};

export default GiftedChatBubble;

//  console.log(
//                   item.nativeEvent.actionKey === "key-01-02"
//                     ? setOpen(true)
//                     : null

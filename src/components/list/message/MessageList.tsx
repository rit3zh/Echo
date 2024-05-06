import React, { useLayoutEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { ContextMenuView } from "react-native-ios-context-menu";
import Animated, {
  SlideOutRight,
  SlideInUp,
  SlideInDown,
  SlideOutUp,
} from "react-native-reanimated";
// React Native UI DevKit
import { Item, ISwipeableProps } from "react-native-ui-devkit";
import {
  MessageDummyList,
  RoomDummyList,
  type Props,
} from "../../../constants";
import { MessageCard } from "./MessageCard";
import { Theme } from "../../../theme/app/constants/theme";
import GiftedChatContext from "../../gifted-chat/context/GiftedChatContext";
// hooks
import { useSegmentListener } from "../../../hooks";
let lastOpened: number = -1;

interface AppProps {
  onPress?: (
    name: string,
    avatar?: string,
    segmentValue?: string
  ) => any | void;
  onContextMenuPress?: (name, avatar?: string) => any | void;
}

const App: React.FC<AppProps> = ({ onPress, onContextMenuPress }: AppProps) => {
  const [data, setData] = useState(MessageDummyList);
  const [rooms, setRooms] = useState(RoomDummyList);
  const segmentValue = useSegmentListener();

  const closeLastOpened = (index: number) => {
    lastOpened != index && data[lastOpened]?.ref?.closeActions();
    lastOpened = index;
  };

  const _render: ListRenderItem<Props> = ({ item, index, separators }) => {
    data[index].separators = separators;

    const _item: ISwipeableProps = {
      separator: {
        data: [data[index - 1], item],
        index,
      },

      component: (
        <MessageCard
          {...item}
          backgroundColor={Theme.dark.backgroundColor}
          notification={2}
        />
      ),
      style: {},

      swipeable: {
        left: [
          {
            icon: {
              name: "pin",
              type: "material-community",
              color: "#fff",
              size: 22,
            },
            backgroundColor: "#FF9500",
            onPress: () => {
              item.ref?.hideItem &&
                item.ref?.hideItem(() => {
                  data.splice(index, 1);
                  setData([...data]);
                }, "left");
            },
          },
          {
            icon: {
              name: "chatbubble-sharp",
              type: "ionicons",
              color: "#fff",
              size: 22,
            },
            backgroundColor: "#007AFF",
            onPress: () => Alert.alert("Warning", "Left Item 2"),
          },
        ],
        right: [
          {
            icon: { name: "trash", type: "ionicons", color: "#fff", size: 22 },
            backgroundColor: "#FF3B30",
            onPress: () => {
              Alert.alert("Warning", "Right Item 1", [
                {
                  text: "Cancel",
                  onPress: () => {},
                },
                {
                  text: "Ok",
                  onPress: async () => {
                    data.splice(index, 1);
                    setData([...data]);
                  },
                },
              ]);
            },
          },
          {
            icon: {
              name: "bell-off",
              type: "material-community",
              color: "#fff",
              size: 22,
            },
            backgroundColor: "#5856D6",
            onPress: () => {
              Alert.alert("Warning", "Right Item 2");
            },
          },
          {
            icon: {
              name: "share-outline",
              type: "ionicons",
              color: "#fff",
              size: 22,
            },
            backgroundColor: "#32ADE6",
            onPress: () => {
              Alert.alert("Warning", "Right Item 3");
            },
          },
        ],
        onBegan: () => {
          closeLastOpened(index);
        },
      },
      onPress: async () => onPress(item.name, item.image, segmentValue),
    };

    return (
      <ContextMenuView
        previewConfig={{
          previewType: "CUSTOM",
          previewSize: "STRETCH",

          preferredCommitStyle: "pop",
        }}
        renderPreview={() => <GiftedChatContext name={item.name} />}
        onPressMenuPreview={() => onContextMenuPress(item.name, item.image)}
      >
        <Item
          marginTop={false}
          expanded={true}
          ref={(ref) => (item.ref = ref)}
          separators={true}
          key={item._id}
          data={_item}
          index={index}
          flex={true}
          style={{
            backgroundColor: Theme.dark.backgroundColor,
          }}
          count={data.length}
        />
      </ContextMenuView>
    );
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: Theme.dark.backgroundColor, flex: 1 }}
    >
      <ScrollView>
        {segmentValue === "Chats" ? (
          <Animated.FlatList
            entering={SlideInUp.duration(400).springify()}
            exiting={SlideOutUp}
            data={data}
            renderItem={_render}
            scrollEnabled={false}
          />
        ) : (
          <Animated.ScrollView
            scrollEnabled={false}
            entering={SlideInDown.duration(400).springify()}
            exiting={SlideOutRight}
          >
            {rooms.map((v, index) =>
              _render({ item: v, index: index, separators: null })
            )}
          </Animated.ScrollView>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

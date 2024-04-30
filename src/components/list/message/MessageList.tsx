import React, { useState } from "react";
import {
  Alert,
  FlatList,
  ListRenderItem,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { ContextMenuView } from "react-native-ios-context-menu";

// React Native UI DevKit
import {
  Item,
  ISwipeableProps,
  Separator,
  Divider,
} from "react-native-ui-devkit";
import { MessageDummyList, type Props } from "../../../constants";
import { MessageCard } from "./MessageCard";
import { Theme } from "../../../theme/app/constants/theme";

let lastOpened: number = -1;
const App = () => {
  const [data, setData] = useState(MessageDummyList);

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
                    item.ref?.hideItem &&
                      item.ref?.hideItem(() => {
                        data.splice(index, 1);
                        setData([...data]);
                      }, "right");
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
      onPress: async () => {},
    };

    return (
      <ContextMenuView
        previewConfig={{
          previewType: "CUSTOM",
          previewSize: "STRETCH",
          backgroundColor: Theme.dark.backgroundColor,
          preferredCommitStyle: "pop",
        }}
        renderPreview={() => (
          <View>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
          </View>
        )}
        onPressMenuPreview={() => {
          Alert.alert(
            "onPressMenuPreview Event",
            `Menu preview was pressed...`
          );
        }}
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
      <FlatList data={data} renderItem={_render} />
    </SafeAreaView>
  );
};

export default App;

import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
import React from "react";
import { ExploreRoomComponent } from "../../../components/import";
import { Theme } from "../../../theme/app/constants/theme";
import { ROOM_DATA } from "../../../constants/data/RoomDummyData";
import { Rooms } from "../../../interfaces";

export function Home() {
  const _renderItem: ListRenderItem<Rooms> = ({ item, index }) => (
    <ExploreRoomComponent {...item} index={index} length={ROOM_DATA.length} />
  );
  return (
    <SafeAreaView
      style={{
        backgroundColor: Theme.dark.backgroundColor,
        flex: 1,
      }}
    >
      <FlatList
        data={ROOM_DATA}
        keyExtractor={(roomIdentifier) => roomIdentifier._id}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
}

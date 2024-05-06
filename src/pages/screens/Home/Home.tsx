import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import {
  ExploreRoomComponent,
  ScreenTimeout,
  StoryViewComponent,
} from "../../../components/import";
import { Theme } from "../../../theme/app/constants/theme";
import { ROOM_DATA } from "../../../constants/data/RoomDummyData";
import { Rooms } from "../../../interfaces";

export function Home() {
  const _renderItem: ListRenderItem<Rooms> = ({ item, index }) => (
    <ExploreRoomComponent {...item} index={index} length={ROOM_DATA.length} />
  );
  return (
    <ScreenTimeout timeout={2000} backgroundColor={Theme.dark.backgroundColor}>
      <SafeAreaView
        style={{
          backgroundColor: Theme.dark.backgroundColor,
          flex: 1,
        }}
      >
        <ScrollView>
          <StoryViewComponent />
          <FlatList
            scrollEnabled={false}
            data={ROOM_DATA}
            keyExtractor={(roomIdentifier) => roomIdentifier._id}
            renderItem={_renderItem}
          />
        </ScrollView>
      </SafeAreaView>
    </ScreenTimeout>
  );
}

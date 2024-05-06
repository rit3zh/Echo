import { View, StyleSheet } from "react-native";
import React, { useRef } from "react";
import {
  MultiStory,
  MultiStoryRef,
  TransitionMode,
} from "react-native-story-view";
// @Constants
import { StoriesDummyData } from "../../constants";

const StoryView = () => {
  const multiStoryRef = useRef<MultiStoryRef>(null);

  return (
    <View style={styles.container}>
      <MultiStory
        stories={StoriesDummyData}
        ref={multiStoryRef}
        avatarProps={{
          userNameStyle: { fontSize: 16 },
        }}
        transitionMode={TransitionMode.Cube}
      />
    </View>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginTop: 20,
  },
});

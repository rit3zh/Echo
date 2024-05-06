import React from "react";
import { EventRegister } from "react-native-event-listeners";

export function useSegmentListener() {
  const [segmentValue, setSegmentValue] = React.useState<string>("Chats");
  React.useLayoutEffect(() => {
    const listener = EventRegister.on("ValueChanged", (value) =>
      setSegmentValue(value)
    );
    return () => {
      EventRegister.removeEventListener(listener.toString());
    };
  }, [segmentValue]);
  return segmentValue;
}

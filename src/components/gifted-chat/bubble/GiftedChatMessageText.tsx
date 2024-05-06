import { View, Text, Image, Dimensions } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  IMessage,
  MessageText,
  MessageTextProps,
} from "react-native-gifted-chat";
import {
  LinkPreview,
  PreviewData,
  getPreviewData,
} from "@flyerhq/react-native-link-preview";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const GiftedChatMessageText: React.FC<MessageTextProps<IMessage>> = (
  props: MessageTextProps<IMessage>
) => {
  let text: string = `This is my YouTube link with a link`;
  const [data, setData] = useState<PreviewData>();
  useLayoutEffect(() => {
    (async () => {
      const response = await getPreviewData(
        "https://in.pinterest.com/pin/137289488913105867/"
      );
      setData(response);
    })();
  }, []);

  if (!data?.title && !data?.image) {
    return <MessageText {...props} />;
  } else {
    return (
      <React.Fragment>
        <View
          style={{
            width: 300,
            height: 190,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            {data.title}
          </Text>
          <Image
            source={{ uri: data?.image?.url }}
            style={{
              aspectRatio: data.image.width / data.image.height,
              width: 100,
            }}
          />
        </View>
      </React.Fragment>
    );
  }
};

export default GiftedChatMessageText;

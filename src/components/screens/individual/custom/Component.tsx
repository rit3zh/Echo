import { PickerIOS } from "@react-native-picker/picker";
import { View } from "react-native";
import React, { Fragment } from "react";
import * as Constants from "../../../../constants/index";

interface Props {
  onValueChange: (value: string) => any | void;
  onTimeValueChange: (value: string) => any | void;
  duration?: string | number;
  time?: string | number;
}

export const Component: React.FC<Props> = ({
  onTimeValueChange,
  onValueChange,
  duration,
  time,
}: Props) => {
  const PickerIOSItem = PickerIOS.Item;
  return (
    <Fragment>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PickerIOS
            style={{
              flex: 1,
            }}
            onValueChange={(val) => onTimeValueChange(val.toString())}
            itemStyle={{ color: "white" }}
            selectedValue={time}
          >
            {Constants.SecondsNumber.map((v, i) => (
              <PickerIOSItem
                key={`${v}_${i}`}
                value={v.toString()}
                label={`${v.toString()}`}
              />
            ))}
          </PickerIOS>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PickerIOS
            itemStyle={{ color: "white" }}
            style={{
              flex: 1,
            }}
            onValueChange={(val) => onValueChange(val.toString())}
            selectedValue={duration}
          >
            {Constants.Time.map((v, i) => (
              <PickerIOSItem
                key={`${v}_${i}`}
                value={v.toString()}
                label={`${v.toString()}`}
              />
            ))}
          </PickerIOS>
        </View>
      </View>
    </Fragment>
  );
};

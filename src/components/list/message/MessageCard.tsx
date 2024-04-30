import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Userpic, Badge } from "react-native-userpic";
import { Theme } from "../../../theme/app/constants/theme";
interface Data {
  img: string;
  name: string;
  message: string;
}

interface Props {
  _id: number;
  name: string;
  content: string;
  image?: string;
  backgroundColor?: string;
  notification?: number;
}

export function MessageCard({
  _id,
  content,
  name,
  image,
  backgroundColor,
  notification,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <View key={_id} style={styles.cardWrapper}>
        <View style={styles.card}>
          <Userpic
            source={{ uri: image }}
            style={styles.cardImg}
            badge={notification}
            badgeColor="#007aff"
            badgeProps={{
              size: 24,
              radius: 5,
              position: "top-left",
            }}
          />

          <View style={styles.cardBody}>
            <Text
              style={[
                styles.cardTitle,
                {
                  color: Theme.dark.title,
                },
              ]}
            >
              {name}
            </Text>

            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[styles.cardContent, { color: Theme.dark.description }]}
            >
              {content}
            </Text>
          </View>

          <View style={styles.cardIcon}>
            <FeatherIcon color="#ccc" name="chevron-right" size={20} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  headerTop: {
    marginHorizontal: -6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: "700",
    color: "#1d1d1d",
  },
  /** Card */
  card: {
    height: 66,
    paddingRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardWrapper: {},
  cardImg: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    marginRight: 12,
  },
  cardBody: {
    maxWidth: "100%",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 17,
    color: "#1d1d1d",
  },
  cardContent: {
    fontSize: 15,
    fontWeight: "500",
    color: "#737987",
    lineHeight: 20,
    marginTop: 4,
  },
  cardIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
});

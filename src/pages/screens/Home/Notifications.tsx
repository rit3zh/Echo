import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Theme } from "../../../theme/app/constants/theme";
import { useColors } from "react-native-ui-devkit";

export function Notifications() {
  const colors = useColors();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          paddingBottom: 140,
          padding: 24,
        }}
      >
        <View style={styles.empty}>
          <View style={styles.fake}>
            <View
              style={[
                styles.fakeCircle,
                {
                  backgroundColor: colors.ios.line,
                },
              ]}
            />

            <View>
              <View
                style={[
                  styles.fakeLine,
                  { width: 120, backgroundColor: colors.ios.line },
                ]}
              />

              <View
                style={[
                  styles.fakeLine,
                  {
                    backgroundColor: colors.ios.line,
                  },
                ]}
              />

              <View
                style={[
                  styles.fakeLine,
                  {
                    width: 70,
                    marginBottom: 0,
                    backgroundColor: colors.ios.line,
                  },
                ]}
              />
            </View>
          </View>

          <View style={[styles.fake, { opacity: 0.6 }]}>
            <View
              style={[
                styles.fakeCircle,
                {
                  backgroundColor: colors.ios.line,
                },
              ]}
            />

            <View>
              <View
                style={[
                  styles.fakeLine,
                  { width: 120, backgroundColor: colors.ios.line },
                ]}
              />

              <View
                style={[
                  styles.fakeLine,
                  {
                    backgroundColor: colors.ios.line,
                  },
                ]}
              />

              <View
                style={[
                  styles.fakeLine,
                  {
                    width: 70,
                    marginBottom: 0,
                    backgroundColor: colors.ios.line,
                  },
                ]}
              />
            </View>
          </View>

          <Text
            style={[
              styles.emptyTitle,
              {
                color: "#fff",
              },
            ]}
          >
            Your inbox is empty
          </Text>

          <Text style={styles.emptyDescription}>
            Once when you begin a new chat, you'll see new unseen messages here.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.dark.backgroundColor,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  /** Empty */
  empty: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
    marginTop: 12,
  },
  emptyDescription: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500",
    color: "#8c9197",
    textAlign: "center",
  },
  /** Fake */
  fake: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  fakeCircle: {
    width: 44,
    height: 44,
    borderRadius: 9999,
    backgroundColor: "#e8e9ed",
    marginRight: 16,
  },
  fakeLine: {
    width: 200,
    height: 10,
    borderRadius: 4,
    backgroundColor: "#e8e9ed",
    marginBottom: 8,
  },
});

import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function ProfileTabScreen() {
  return <Text style={styles.container}>Test</Text>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignSelf: "center",
    fontSize: 40,
  },
});

import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default class MessageTabScreen extends React.Component {
  render() {
    return <Text style={styles.container}>Test</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignSelf: "center",
    fontSize: 40,
  },
});

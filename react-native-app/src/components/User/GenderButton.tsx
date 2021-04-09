import { Radio } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from "react-native-paper";

export default class GenderButton extends React.Component {
  state = {
    value: "male",
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <RadioButton
            value="male"
            onPress={() => this.setState({ value: "male" })}
            status={this.state.value === "male" ? "checked" : "unchecked"}
          />
          <Text style={styles.button}>Male</Text>
        </View>
        <View style={styles.container}>
          <RadioButton
            value="female"
            onPress={() => this.setState({ value: "female" })}
            status={this.state.value === "female" ? "checked" : "unchecked"}
          />
          <Text style={styles.button}>Female</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  button: {
    color: "#FFFFFF",
    alignSelf: "center",
  },
});

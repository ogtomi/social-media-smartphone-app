import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "../Themed";

export interface IUserInputProps {
  text: string;
}

export default class UserInput extends React.Component<IUserInputProps> {
  render() {
    const { text } = this.props;
    return (
      <View>
        <Text>{text}</Text>
        <TextInput style={styles.input} placeholder={text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    color: "#FFFF",
    height: 40,
  },
});

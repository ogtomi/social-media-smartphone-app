import React from "react";
import { StyleSheet, Image } from "react-native";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

export interface IMessageProps {
  text: string;
  color: string;
}

export default class Message extends React.Component<IMessageProps> {
  render() {
    const { text, color } = this.props;

    return (
      <View
        //lightColor="rgba(242,242,242,0.9)"
        lightColor="rgba(242,242,242,1)"
        //darkColor="rgba(0,0,0,1)"
        style={{
          backgroundColor: color,
          alignSelf: "flex-start",
          marginHorizontal: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          marginVertical: 5,
          paddingVertical: 10,
        }}
      >
        <Text style={styles.message}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 8,
    //marginBottom: 8,
    //justifyContent: "center",
    //alignContent: "center",
  },
  message: {
    textAlignVertical: "center",
  },
});

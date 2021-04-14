import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

export interface IEventPostContentProps {
  contentText: string;
  //contentImage: Image;
}

export default class EventPostContent extends React.Component<IEventPostContentProps> {
  render() {
    const contentText = this.props.contentText;

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].postBackgroundColor}
      >
        <Text
          style={styles.eventPostContent}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {contentText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: 10,
    paddingBottom: 10,
    //marginTop: 5,
    marginBottom: 5,
  },
  eventPostContent: {
    //marginLeft: 5,
    //fontSize: 20,
    //fontWeight: "bold",
  },
});

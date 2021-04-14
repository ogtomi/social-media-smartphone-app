import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

export interface IEventPostInfoProps {
  eventName: string;
  eventDate: string;
  //contentImage: Image;
}

export default class EventPostInfo extends React.Component<IEventPostInfoProps> {
  render() {
    const eventName = this.props.eventName;
    const eventDate = this.props.eventDate;

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].postBackgroundColor}
      >
        <Text
          style={styles.eventPostTitle}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {eventName}
        </Text>
        <Text
          style={styles.eventPostDate}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {eventDate}
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
    //marginBottom: 5,
    //alignSelf: "center",
    //alignContent: "center",
  },
  eventPostTitle: {
    //marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    //alignContent: "center",
  },
  eventPostDate: {
    //marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    //alignContent: "center",
  },
});

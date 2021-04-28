import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

export interface IEventPostStatsProps {
  participantsNum: number;
}

export default class EventPostStats extends React.Component<IEventPostStatsProps> {
  render() {
    const likesNum = this.props.participantsNum;

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].postBackgroundColor}
      >
        <Text
          style={styles.eventPostStats}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Participants: {likesNum}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignSelf: "center",
    paddingBottom: 5,
  },
  eventPostStats: {
    //marginLeft: 10,
    //marginRight: 10,
    fontSize: 15,
    //fontWeight: "bold",
  },
});

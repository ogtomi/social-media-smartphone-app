import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Colors from "../../../constants/Colors";
import { Text, View } from "../Themed";
import WallPostAuthor from "./WallPostAuthor";

export interface IWallPostStatsProps {
  likesNum: number;
  commentsNum: number;
}

export default class WallPostStats extends React.Component<IWallPostStatsProps> {
  render() {
    const likesNum = this.props.likesNum;
    const commentsNum = this.props.commentsNum;

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].wallPostBackgroundColor}
      >
        <Text
          style={styles.wallPostStats}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Likes: {likesNum}
        </Text>
        <Text
          style={styles.wallPostStats}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Comments: {commentsNum}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wallPostStats: {
    //marginLeft: 10,
    //marginRight: 10,
    fontSize: 15,
    //fontWeight: "bold",
  },
});

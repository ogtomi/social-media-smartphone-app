import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Colors from "../../../constants/Colors";
import { Text, View } from "../Themed";
import WallPostAuthor from "./WallPostAuthor";
import WallPostContent from "./WallPostContent";
import WallPostStats from "./WallPostStats";

export interface IWallPostProps {
  username: string;
  contentText: string;
  //contentImage: Image;
  likesNum: number;
  commentsNum: number;
}

export default class WallPost extends React.Component<IWallPostProps> {
  render() {
    const username = this.props.username;
    const contentText = this.props.contentText;
    const likesNum = this.props.likesNum;
    const commentsNum = this.props.commentsNum;

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].wallPostBackgroundColor}
      >
        <WallPostAuthor username={username} />
        <WallPostContent contentText={contentText} />
        <WallPostStats
          likesNum={likesNum}
          commentsNum={commentsNum}
        ></WallPostStats>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    //paddingBottom: 10,
    marginTop: 5,
    //marginBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

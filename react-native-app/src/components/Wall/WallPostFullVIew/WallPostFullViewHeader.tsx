import React from "react";
import { StyleSheet, Image } from "react-native";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

import WallPostAuthor from "../WallPost/WallPostAuthor";
import WallPostContent from "../WallPost/WallPostContent";
import WallPostStats from "../WallPost/WallPostStats";

export interface IWallPostFullViewHeaderProps {
  username: string;
  contentText: string;
  //contentImage: Image;
  likesNum: number;
  commentsNum: number;
}

export default class WallPostFullViewHeader extends React.Component<IWallPostFullViewHeaderProps> {
  render() {
    const { username, contentText, likesNum, commentsNum } = this.props;

    return (
      <View
        //lightColor="rgba(242,242,242,0.9)"
        lightColor="rgba(242,242,242,1)"
        //darkColor="rgba(0,0,0,1)"
      >
        <View
          darkColor={Colors["dark"].postBackgroundColor}
          style={styles.container}
        >
          <WallPostAuthor username={username} />
          <WallPostContent contentText={contentText} />
          <WallPostStats likesNum={likesNum} commentsNum={commentsNum} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 8,
    paddingLeft: 8,
    marginTop: 5,
    marginBottom: 30,
  },
});

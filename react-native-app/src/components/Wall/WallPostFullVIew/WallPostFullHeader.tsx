import React from "react";
import { StyleSheet, Image } from "react-native";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

import WallPostAuthor from "../WallPostAuthor";
import WallPostContent from "../WallPostContent";
import WallPostStats from "../WallPostStats";

export interface IWallPostFullHeaderProps {
  username: string;
  contentText: string;
  //contentImage: Image;
  likesNum: number;
  commentsNum: number;
}

export default class WallPostFullHeader extends React.Component<IWallPostFullHeaderProps> {
  render() {
    const { username, contentText, likesNum, commentsNum } = this.props;

    return (
      <View
        //lightColor="rgba(242,242,242,0.9)"
        lightColor="rgba(242,242,242,1)"
        //darkColor="rgba(0,0,0,1)"
      >
        <View
          darkColor={Colors["dark"].wallPostBackgroundColor}
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
    marginBottom: 40,
  },
});

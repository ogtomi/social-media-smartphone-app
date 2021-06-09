import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";
import Colors from "../../../../constants/Colors";
import { fetchUsers } from "../../../actions";

import { Text, View } from "../../Themed";

import axios from "axios";
import { connect } from "react-redux";

export class WallPostBottomBar extends React.Component<
  {},
  {
    likeButtonCliked: Boolean;
    username: string;
    contentText: string;
    //contentImage: Image;
    likesNum: number;
    commentsNum: number;
    navigation: any;
    data: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      likeButtonCliked: false,
      username: this.props.username,
      contentText: this.props.contentText,
      likesNum: this.props.likesNum,
      commentsNum: this.props.commentsNum,
      navigation: this.props.navigation,
      data: [[]],
    };
  }

  handlerLikeOnClick = () => {
    this.props.fetchUsers()
    if (this.state.likeButtonCliked) {
      this.setState({
        likeButtonCliked: false,
      });
    } else {
      this.setState({
        likeButtonCliked: true,
      });
    }
    // send info to database
  }

  handlerCommentOnClick = () => {
    this.state.navigation.navigate("WallPostFullView", {
      username: this.state.username,
      contentText: this.state.contentText,
      commentsNum: this.state.commentsNum,
      likesNum: this.state.likesNum,
      focused: true,
    });
  }

  renderUsers = () => {
    return this.props.users.map((user) => {
      return (
        console.log({user})
      )
    })
  };

  render() {
    var likeButtonTextColor;

    if (this.state.likeButtonCliked) {
      likeButtonTextColor = "mediumblue";
    } else {
      likeButtonTextColor = "white";
    }

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].postBackgroundColor}
      >
        <Button
          style={styles.buttonLikeStyle}
          icon="thumb-up"
          mode="outlined"
          color={likeButtonTextColor}
          disabled={false}
          onPress={() => {
            this.handlerLikeOnClick();
          }}
        >
          Like
        </Button>
        <Button
          style={styles.buttonCommentStyle}
          icon="comment"
          mode="contained"
          color="darkblue"
          onPress={() => {
            this.handlerCommentOnClick();
          }}
        >
          comment
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users),
  };
};

export default connect(mapStateToProps, { fetchUsers })(WallPostBottomBar);

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 5,
    flexDirection: "row",
    //alignItems: "stretch",
    justifyContent: "space-between",
  },
  buttonCommentStyle: {
    width: "48%",
  },
  buttonLikeStyle: {
    width: "48%",
    backgroundColor: "green",
  },
});

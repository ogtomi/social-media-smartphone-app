import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";
import Colors from "../../../../constants/Colors";

import { Text, View } from "../../Themed";

export default class EventPostBottomBar extends React.Component<
  {},
  { likeButtonCliked: Boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      likeButtonCliked: false,
    };
    this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);
  }
  handlerButtonOnClick() {
    if (this.state.likeButtonCliked) {
      this.setState({
        likeButtonCliked: false,
      });
    } else {
      this.setState({
        likeButtonCliked: true,
      });
    }
  }
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
          style={styles.buttonJoinStyle}
          icon="thumb-up"
          mode="outlined"
          color={likeButtonTextColor}
          disabled={false}
          onPress={() => {
            this.handlerButtonOnClick();
          }}
        >
          Join
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //paddingTop: 5,
    //flexDirection: "row",
    //alignItems: "stretch",
    //justifyContent: "center",
  },
  buttonJoinStyle: {
    width: "55%",
    backgroundColor: "green",
    alignSelf: "center",
  },
});

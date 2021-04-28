import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

import Colors from "../../../../constants/Colors";

import WallPost from "./WallPost";
import WallPostBottomBar from "./WallPostBottomBar";

import { Text, View } from "../../Themed";

const DATA = [
  {
    id: "1",
    user: "Pudzian",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "2",
    user: "Makłowicz",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "3",
    user: "Najman",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "4",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "5",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "6",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "7",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "8",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "9",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
];

export interface IWallPostFlatListProps {
  navigation: any;
}

export default class WallPostFlatList extends React.Component<IWallPostFlatListProps> {
  render() {
    return (
      <FlatList
        style={styles.container}
        data={DATA}
        renderItem={({ item }) => (
          <View lightColor="rgba(242,242,242,1)" darkColor="rgba(0,0,0,1)">
            <TouchableOpacity
              //activeOpacity={1}
              delayPressIn={100}
              onPress={() =>
                this.props.navigation.navigate("WallPostFullView", {
                  username: item.user,
                  contentText: item.content,
                  commentsNum: item.commentsNum,
                  likesNum: item.likesNum,
                })
              }
            >
              <WallPost
                username={item.user}
                contentText={item.content}
                commentsNum={item.commentsNum}
                likesNum={item.likesNum}
              />
            </TouchableOpacity>
            <View
              //lightColor="rgba(242,242,242,0.9)"
              darkColor={Colors["dark"].postBackgroundColor}
              style={styles.buttonStyles}
            >
              <WallPostBottomBar />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  buttonStyles: {
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    marginBottom: 8,
  },
});

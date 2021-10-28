import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

import Colors from "../../../../constants/Colors";

import Friend from "./Friend";

import { Text, View } from "../../Themed";

const DATA = [
  {
    id: "1",
    user: "Pudzian",
    lastMessage: "Lorem ipsum dolor sit amet",
  },
  {
    id: "2",
    user: "Pudzian",
    lastMessage: "Lorem ipsum dolor sit amet",
  },
  {
    id: "3",
    user: "Pudzian",
    lastMessage: "Lorem ipsum dolor sit amet",
  },
  {
    id: "4",
    user: "Pudzian",
    lastMessage: "Lorem ipsum dolor sit amet",
  },
  {
    id: "5",
    user: "Pudzian",
    lastMessage: "Lorem ipsum dolor sit amet",
  },
  {
    id: "6",
    user: "Pudzian",
    lastMessage: "Lorem ipsum dolor sit amet",
  },
  {
    id: "7",
    user: "Pudzian",
    lastMessage: "Lorem ipsum dolor sit amet",
  },
  {
    id: "8",
    user: "Pudzian",
    lastMessage: "Lorem ipsum dolor sit amet",
  },
  {
    id: "9",
    user: "Pudzian",
    lastMessage: "Lorem ipsum dolor sit amet",
  },
];

export interface IFriendFlatListProps {
  navigation: any;
}

export default class FriendFlatList extends React.Component<IFriendFlatListProps> {
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
                this.props.navigation.navigate("Conversation", {
                  username: item.user,
                  lastMessage: item.lastMessage,
                  focused: false,
                })
              }
            >
              <Friend username={item.user} lastMessage={item.lastMessage} />
            </TouchableOpacity>
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

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

export default function WallPost(props: any) {
  return (
    <TouchableOpacity>
      <View style={styles.wallPostBox}>
        <Text
          style={styles.wallPostTop}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Użytkownik {props.user}:
        </Text>
        <Text
          style={styles.wallPostContent}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {props.content}
        </Text>
        <Text
          style={styles.wallPostBottom}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Polubienia: {props.likesNum} Komentarze: {props.commentsNum}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wallPostBox: {
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  wallPostTop: {
    marginLeft: 5,
    marginRight: 5,
  },
  wallPostContent: {
    margin: 5,
  },
  wallPostBottom: {
    marginLeft: 5,
    marginRight: 5,
  },
});

import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";

import Colors from "../../../../constants/Colors";

import { Text, View, TextInput } from "../../Themed";

import MessageInput from "./MessageInput";
import Message from "./Message";

var DATA = [
  {
    id: "1",
    text: "ELO",
    color: "green",
  },
  {
    id: "2",
    text: "Siema",
    color: "blue",
  },
  {
    id: "3",
    text: "Co tam?",
    color: "green",
  },
  {
    id: "4",
    text: "Nic, a tam?",
    color: "blue",
  },
];

export interface IConversationProps {
  //wallPostId: number;
  username: string;
  contentText: string;
  //contentImage: Image;
  likesNum: number;
  commentsNum: number;
  route: any;
  focused: boolean;
}

export default class Conversation extends React.Component<IConversationProps> {
  state = {
    messageText: "",
    focused: this.props.focused,
  };

  handleSend = (text: string) => {
    this.setState({ messageText: text });
    //console.log(DATA);
  };
  handleSubmitSend = () => {
    this.setState({ messageText: "" });

    var lastId = parseInt(DATA[DATA.length - 1].id);
    var newId = lastId + 1;
    DATA = DATA.concat({
      id: newId.toString(),
      text: this.state.messageText,
      color: "blue",
    });
    // handle database send
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.9 }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <View
                style={styles.wallComment}
                lightColor="rgba(242,242,242,1)"
                darkColor="rgba(0,0,0,1)"
              >
                <Message text={item.text} color={item.color} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ flex: 0.1 }} />
        <>
          <View
            darkColor={Colors["dark"].postBackgroundColor}
            style={styles.container}
          >
            <TextInput
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
              style={styles.wallmessageTextInput}
              onChangeText={this.handleSend}
              value={this.state.messageText}
              multiline={true}
              placeholder={"....."}
              onSubmitEditing={this.handleSubmitSend}
              clearTextOnFocus={true}
              blurOnSubmit={true}
            />
          </View>
        </>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 20,
    //paddingBottom: 50,
  },
  wallComment: {
    //paddingBottom: 8,
    //marginBottom: 8,
  },

  inputContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 30,
  },
  wallmessageTextInput: {
    padding: 5,
    margin: 15,
    minHeight: 40,
    //borderColor: '#7a42f4',
    borderWidth: 1,
  },
});

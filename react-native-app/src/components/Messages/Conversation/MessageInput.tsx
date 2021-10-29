import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";

import { Text, View, TextInput } from "../../Themed";
import Colors from "../../../../constants/Colors";

const imageSize = Math.round(Dimensions.get("window").height / 17);

export interface IMessageInputProps {
  focused: boolean;
  //avatar: Image;
}

export default class MessageInput extends React.Component<IMessageInputProps> {
  state = {
    messageText: "",
    focused: this.props.focused,
  };

  handleSend = (text: string) => {
    this.setState({ messageText: text });
  };
  handleSubmitSend = () => {
    this.setState({ messageText: "" });
    alert(`Message sent: ${this.state.messageText}`);
    // handle database send
  };

  render() {
    //const { username, contentText } = this.props;

    return (
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
          autoFocus={this.state.focused}
          clearTextOnFocus={true}
          blurOnSubmit={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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

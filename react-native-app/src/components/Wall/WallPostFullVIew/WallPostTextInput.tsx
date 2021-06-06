import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";

import { Text, View, TextInput } from "../../Themed";
import Colors from "../../../../constants/Colors";

const imageSize = Math.round(Dimensions.get("window").height / 17);

export interface IWallPostTextInputProps {
  focused: boolean;
  //avatar: Image;
}

export default class WallPostTextInput extends React.Component<IWallPostTextInputProps> {
    state = {
        commentText: '',
        focused: this.props.focused}

    handleComment = (text: string) =>{
        this.setState({commentText: text})
    }
    handleSubmitComment = () =>{
        this.setState({commentText: ''})
        alert(`Comment added: ${this.state.commentText}`)
        // handle database send
    }

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

                style={styles.wallCommentTextInput}
                onChangeText={this.handleComment}
                value={this.state.commentText}
                multiline={true}
                placeholder={"Comment"}
                onSubmitEditing={this.handleSubmitComment}
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
  wallCommentTextInput: {
    padding: 5,
    margin: 15,
    minHeight: 40,
    //borderColor: '#7a42f4',
    borderWidth: 1
  },
});

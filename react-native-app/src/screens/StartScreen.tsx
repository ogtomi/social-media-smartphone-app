import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { signIn, signOut } from "../actions";
import { TextInput } from "react-native-gesture-handler";

class StartScreen extends React.Component {
  state = {
    inputEmail: null,
    inputPassword: null,
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>APP</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({inputEmail: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => {this.setState({inputPassword: text})}}
          />
        </View>
        <TouchableOpacity onPress={() => navigate("Home")}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.signIn(this.state.inputEmail, this.state.inputPassword)}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>SIGN WITH GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("SignUp")}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { loginData: state.sign };
};

export default connect(mapStateToProps, { signIn, signOut })(
  StartScreen
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: 220,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});

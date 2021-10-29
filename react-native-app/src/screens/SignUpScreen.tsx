import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createUser } from "../actions";
import { TextInput } from "react-native-gesture-handler";
import users from "../apis/api";

class SignUpScreen extends React.Component {
  state = {
    name: null,
    surname: null,
    email: null,
    password: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Sign up</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Name..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Surname..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ surname: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.createUser(
              this.state.name,
              this.state.surname,
              this.state.email,
              this.state.password
            )
          }
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.users,
  };
};
export default connect(mapStateToProps, { createUser })(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
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

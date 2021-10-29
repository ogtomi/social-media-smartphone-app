import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Button } from "react-native-paper";
import { Formik } from "formik";
import { register } from "../auth/auth.api";

const RegisterForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>REGISTER</Text>
      <Formik
        initialValues={{ name: "", surname: "", email: "", password: "" }}
        onSubmit={(values) => {
          register(values);
        }}
      >
        {(formikprops) => (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              onChangeText={formikprops.handleChange("name")}
              value={formikprops.values.name}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Surname"
              onChangeText={formikprops.handleChange("surname")}
              value={formikprops.values.surname}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={formikprops.handleChange("email")}
              value={formikprops.values.email}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={formikprops.handleChange("password")}
              value={formikprops.values.password}
            />
            <Button
              style={styles.button}
              mode="contained"
              onPress={formikprops.handleSubmit}
            >
              Register
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 300,
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  button: {
    width: 300,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10,
  },
});

export default RegisterForm;

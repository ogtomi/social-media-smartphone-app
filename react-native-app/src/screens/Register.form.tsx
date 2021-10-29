import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { register } from "../auth/auth.api";

const RegisterForm = () => {
  return (
    <View>
      <Formik
        initialValues={{ name: "", surname: "", email: "", password: "" }}
        onSubmit={(values) => {
          register(values)
        }}
      >
        {(formikprops) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={formikprops.handleChange("name")}
              value={formikprops.values.name}
            />
            <TextInput
              style={styles.input}
              placeholder="Surname"
              onChangeText={formikprops.handleChange("surname")}
              value={formikprops.values.surname}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={formikprops.handleChange("email")}
              value={formikprops.values.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={formikprops.handleChange("password")}
              value={formikprops.values.password}
            />
            <Button
              title="submit"
              color="maroon"
              onPress={formikprops.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

export default RegisterForm;

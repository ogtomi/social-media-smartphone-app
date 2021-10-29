import React from "react";
import Joi from "react-native-joi";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "react-query";
import { register, RegisterFormInput } from "../auth/auth.api";
import { Formik } from "formik";
import { View, Button } from "react-native";
import { TextInput } from "react-native-paper";

const validationSchema = Joi.object({
  email: Joi.string().required(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
  password: Joi.string().required().min(6),
});

const RegisterForm: React.FC = () => {
  const { control, handleSubmit, errors } = useForm<RegisterFormInput>({
    resolver: joiResolver(validationSchema),
  });

  const { mutate: registerUser } = useMutation(register, {
    onSuccess: () => {
      console.log("registered");
    },
    // onError: (error) => {
    //   if (error.response.status === 400) {
    //     const errorArray = error.response.data.message;
    //     errorArray.forEach((error) => {
    //       setError(error.property, {
    //         message: Object.values(error.constraints)[0],
    //       });
    //     });
    //   }
    // },
  });

  const onSubmit = (data: RegisterFormInput) => {
    //registerUser(data);
    console.log(data);
  };

  return (
    <View>
      <Controller
        name="name"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Name is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Name"
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
      />
      <Controller
        name="surname"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Surname is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Surname"
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Email is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Password is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
      />
      <Button title="Submit" onPress={() => {
        console.log("pressed")
        onSubmit()
      }} />
    </View>
  );
};

export default RegisterForm;

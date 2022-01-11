import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import NavLink from "./NavLink";

const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
  navLinkText,
  routName,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const SignUpHandler = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.toLowerCase())) {
      setEmailError("Enter valid email");
    } else {
      setEmailError("");
    }
    if (name.trim().length === 0) {
      setNameError("Enter your name");
    } else {
      setNameError("");
    }
    if (phone.trim().length === 0) {
      setPhoneError("Enter your phone no");
    } else {
      setPhoneError("");
    }
    if (password.trim().length === 0) {
      setPasswordError("Enter your password");
    } else {
      setPasswordError("");
    }
    if (
      emailRegex.test(email.toLowerCase()) &&
      name.trim().length != 0 &&
      phone.trim().length != 0 &&
      password.trim().length != 0
    ) {
      onSubmit({ name, email, phone, password });
    }
  };
  const SignInHandler = () => {
    if (name.trim().length === 0) {
      setNameError("Enter your name");
    } else {
      setNameError("");
    }

    if (name.trim().length === 0) {
      setPasswordError("Enter your password");
    } else {
      setPasswordError("");
    }
    if (name.length != 0 && password.length != 0) {
      onSubmit({ name, email, phone, password });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Text style={{ textAlign: "center", top: -30 }} h4>
            {headerText}
          </Text>

          <Input
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            keyboardType="default"
            onChangeText={setName}
            leftIcon={
              <Icon
                name="user"
                style={{ marginRight: 10 }}
                size={24}
                color="gray"
              />
            }
            errorMessage={nameError}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
          {submitButtonText === "Sign Up" && (
            <>
              <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                keyboardType="default"
                leftIcon={
                  <Icon
                    name="envelope"
                    style={{ marginRight: 10 }}
                    size={24}
                    color="gray"
                  />
                }
                errorMessage={emailError}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
              />
              <Input
                placeholder="Phone no"
                keyboardType="decimal-pad"
                value={phone}
                onChangeText={setPhone}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                leftIcon={
                  <Icon
                    name="phone"
                    style={{ marginRight: 10 }}
                    size={24}
                    color="gray"
                  />
                }
                errorStyle={{ color: "red" }}
                errorMessage={phoneError}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </>
          )}

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            keyboardType="default"
            autoCorrect={false}
            leftIcon={
              <Icon
                name="lock"
                style={{ marginRight: 10 }}
                size={24}
                color="gray"
              />
            }
            secureTextEntry
            errorStyle={{ color: "red" }}
            errorMessage={passwordError}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
          {submitButtonText === "Sign Up" ? (
            <Button title={submitButtonText} onPress={SignUpHandler} />
          ) : (
            <Button title={submitButtonText} onPress={SignInHandler} />
          )}
          <NavLink text={navLinkText} routName={routName} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    marginLeft: 15,
    margin: 10,
    color: "red",
  },
  input: {
    height: 35,
    margin: 8,
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  form: {
    margin: 20,
  },
});

export default AuthForm;

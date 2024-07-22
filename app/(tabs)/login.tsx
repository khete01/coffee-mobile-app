import { useAuth } from "@/contexts/AuthProvider";
import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
// import PagerView from "react-native-pager-view";
// import { useRef } from "react";

export default function LoginScreen() {
  const { onLogin } = useAuth();
  const [email, onChangeEmail] = useState<string | undefined>();
  const [password, onChangePassword] = useState<string | undefined>();

  const loginHandler = () => {
    if (email && password)
      onLogin({
        email,
        password,
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/login-bg.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.page}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            placeholder="E-mail Address"
            placeholderTextColor={"#828282"}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            placeholder="Password"
            placeholderTextColor={"#828282"}
          />
          <Pressable>
            <Text style={styles.forgotPass}>Forgot password?</Text>
          </Pressable>
          <Pressable onPress={loginHandler} style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
  image: {
    justifyContent: "center",
    position: "absolute",
    zIndex: -2,
    width: "100%",
    height: "100%",
  },
  input: {
    width: 350,
    height: 59,
    color: "white",
  },
  forgotPass: {
    color: "#CE9760",
    alignSelf: "flex-end",
  },
  button: {
    width: 242,
    height: 53,
    backgroundColor: "#CE9760",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 280,
    marginBottom: 84,
  },
  buttonText: {
    color: "#543A20",
    fontSize: 20,
    fontWeight: "bold",
  },
});

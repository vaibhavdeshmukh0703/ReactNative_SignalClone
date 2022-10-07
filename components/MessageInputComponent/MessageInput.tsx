import { Pressable, StyleSheet, Text, TextInput, View ,KeyboardAvoidingView, Platform} from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState('');
  console.log(message);
  const sendMessage = () => {
    if (message) {
        alert(message);
        setMessage('');
    }
  };
  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={100}
          style={styles.container}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="emotsmile" size={30} color="#595959" />
        <TextInput
          placeholder="Signal Message..."
          value={message}
          onChangeText={setMessage}
          style={styles.input}
          showSoftInputOnFocus={false}
        />
        <Ionicons name="mic-outline" size={30} color="#595959" />
        <Ionicons name="camera-outline" size={30} color="#595959" />
      </View>
      <View style={styles.submitContainer}>
        <Pressable onPress={sendMessage} disabled={message ? false : true}>
          {/* <Text style={styles.submit}>+</Text> */}
          {message ? (
            <MaterialCommunityIcons
              name="send-circle"
              size={36}
              color="#3777f0"
            />
          ) : (
            <AntDesign name="pluscircle" size={30} color="#3777f0" />
          )}
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    marginRight: 10,
    borderRadius: 15,
    padding: 5,
  },
  input: {
    height: 30,
    //borderWidth: 1,
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    color: "grey",
    textAlignVertical: "center",
  },

  submitContainer: {
    // height: 30,
    // width: 30,
    // //backgroundColor:'#3777f0',
    // borderRadius: 30,
  },
  submit: {
    textAlign: "center",
    backgroundColor: "#3777f0",
    color: "white",
    fontSize: 20,
  },
});

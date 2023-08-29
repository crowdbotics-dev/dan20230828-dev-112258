import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from "react-native";

const RedScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Red Screen</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.text}>
          Welcome to the Red Screen! This is a sample screen for a React Native app. To get started, edit this screen's code in your text editor of choice, save the file, and then refresh the app to see your changes. Happy coding!
        </Text>
        <Button title="Click me!" onPress={() => alert("Button clicked!")} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF0000"
  },
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 20
  }
});
export default RedScreen;
import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from "react-native";

const BlueScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Blue Screen</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel bibendum sapien. Nulla facilisi. Sed euismod
          euismod libero, vel bibendum sapien. Nulla facilisi.
        </Text>
        <Button title="Click me!" onPress={() => alert("Button clicked!")} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0077be"
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
export default BlueScreen;
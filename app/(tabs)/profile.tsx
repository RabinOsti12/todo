import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function profile() {
  // console.log("hello")
  return (
    <View style={styles.container}>
      <Text>This is profile page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

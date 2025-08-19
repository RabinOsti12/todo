import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function contact() {
  return (
    <View style={styles.container}>
      <Text>this is contact</Text>
      <Link href="/(tabs)" style={styles.links}>
        Go Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  links: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

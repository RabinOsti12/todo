import { ITodo } from "@/constants/types";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<[] | ITodo[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  function handleAddTodo() {
    console.log("handle add triggered!");
    if (text.trim().length < 5) {
      setErrorMessage("Todo should be atleast 5 character long.");
      return;
    }
    setTodos((prev) => [...prev, { id: Date.now().toString(), title: text }]);
    setErrorMessage("");
    setText("");
    return;
  }

  function handleDelete(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Todo List</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo..."
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleAddTodo}
          returnKeyType="done"
        />
        <Pressable
          style={{
            backgroundColor: "#1660d9",
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
          }}
          onPress={handleAddTodo}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Add</Text>
        </Pressable>
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      {todos.length === 0 ? (
        <Text style={styles.emptyText}>No todos yet. Add one above!</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item.title}</Text>
              <Pressable
                style={styles.deleteBtn}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.deleteText}>✕</Text>
              </Pressable>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  addBtn: {
    padding: 20,
  },
  errorMessage: {
    fontSize: 14,
    color: "red",
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 15,
    gap: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
    fontStyle: "italic",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  deleteBtn: {
    backgroundColor: "#FF5252",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

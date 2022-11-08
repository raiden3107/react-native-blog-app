import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context } from "../Context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title="Add Post"
        onPress={() =>
          addBlogPost(title, content, () => navigation.navigate("Index"))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    marginBottom: 15,
    fontSize: 20,
    borderRadius: 5,
  },
  label: {
    marginTop: 15,
    fontSize: 18,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default CreateScreen;

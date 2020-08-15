import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const RecipeInput = (props) => {
  const [enteredRecipe, setEnteredRecipe] = useState("");

  const recipeInputHandler = (enteredText) => {
    setEnteredRecipe(enteredText);
  };
  const addRecipeHandler = () => {
    props.onAddRecipe(enteredRecipe);
    setEnteredRecipe("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your item"
          style={styles.input}
          onChangeText={recipeInputHandler}
          value={enteredRecipe}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addRecipeHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default RecipeInput;

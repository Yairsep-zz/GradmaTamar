import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import RecipeItem from "./components/RecipeItem";
import RecipeInput from "./components/RecipeInput";

export default function App() {
  const [recipesList, setRecipesList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addRecipeHandler = (recipeTitle) => {
    setRecipesList((currentRecipes) => [
      ...currentRecipes,
      { id: Math.random().toString(), value: recipeTitle },
    ]);
    setIsAddMode(false);
  };

  const removeRecipeHandler = (recipeId) => {
    setRecipesList((currentRecipes) => {
      return currentRecipes.filter((recipe) => recipe.id !== recipeId);
    });
  };
//
  const cancelRecipeAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View>
        <Text>Dana's Favorite Recipes</Text>
      </View>
      <Button title="Add New Recipe" onPress={() => setIsAddMode(true)} />
      <RecipeInput
        visible={isAddMode}
        onAddRecipe={addRecipeHandler}
        onCancel={cancelRecipeAdditionHandler}
      />
      <FlatList
        data={recipesList}
        renderItem={(itemData) => (
          <RecipeItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeRecipeHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

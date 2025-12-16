import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Box>
      <Header />

      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      ) : (
        <RecipeListPage onSelectRecipe={setSelectedRecipe} />
      )}
    </Box>
  );
}

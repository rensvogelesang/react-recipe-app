import { useState } from "react";
import { SimpleGrid, Input, Stack, Box, Text } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { data } from "../utils/data";

export function RecipeListPage({ onSelectRecipe }) {
  const [search, setSearch] = useState("");

  const recipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Stack p={6} spacing={8}>
      {/* Search input */}
      <Input
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        maxW="400px"
      />

      {/* No results message */}
      {recipes.length === 0 && (
        <Text color="gray.500" textAlign="center">
          No recipes found. Try a different search term.
        </Text>
      )}

      {/* Recipe grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} spacing={8}>
        {recipes.map((hit) => (
          <Box key={hit.recipe.uri} display="flex" justifyContent="center">
            <RecipeCard
              recipe={hit.recipe}
              onClick={() => onSelectRecipe(hit.recipe)}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

import { useState } from "react";
import { SimpleGrid, Input, Stack, Box } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { data } from "../utils/data";

export function RecipeListPage({ onSelectRecipe }) {
  const [search, setSearch] = useState("");

  const recipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Stack p={6} spacing={6}>
      {/* Search input */}
      <Input
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Recipe grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {recipes.map((hit) => (
          <Box key={hit.recipe.uri}>
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

import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Badge,
  Wrap,
} from "@chakra-ui/react";

export function RecipeCard({ recipe, onClick }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      onClick={onClick}
      _hover={{ shadow: "md" }}
      transition="box-shadow 0.2s"
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        w="100%"
        h="200px"
        objectFit="cover"
      />

      <Stack p={4} spacing={2}>
        <Heading size="md">{recipe.label}</Heading>

        {/* Diet labels */}
        {recipe.dietLabels?.length > 0 && (
          <Text fontSize="sm" color="gray.500">
            Diet: {recipe.dietLabels.join(", ")}
          </Text>
        )}

        {/* Health labels */}
        <Wrap>
          {recipe.healthLabels.includes("Vegan") && (
            <Badge colorScheme="green">Vegan</Badge>
          )}
          {recipe.healthLabels.includes("Vegetarian") && (
            <Badge colorScheme="teal">Vegetarian</Badge>
          )}
        </Wrap>

        <Text fontSize="sm">Meal: {recipe.mealType?.join(", ") || "N/A"}</Text>
        <Text fontSize="sm">Dish: {recipe.dishType?.join(", ") || "N/A"}</Text>

        {recipe.cautions?.length > 0 && (
          <Text fontSize="sm" color="red.400">
            ⚠ {recipe.cautions.join(", ")}
          </Text>
        )}
      </Stack>
    </Box>
  );
}

import { useEffect } from "react";
import {
  Button,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Separator,
  Tag,
  Wrap,
  Text,
} from "@chakra-ui/react";

export function RecipePage({ recipe, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack p={6} spacing={6} maxW="800px" mx="auto" divider={<Separator />}>
      <Button alignSelf="flex-start" onClick={onBack}>
        ← Back
      </Button>

      <Heading>{recipe.label}</Heading>

      <Image src={recipe.image} alt={recipe.label} borderRadius="lg" />

      <Text>
        <strong>Meal type:</strong> {recipe.mealType?.join(", ") || "N/A"}
      </Text>

      <Text>
        <strong>Dish type:</strong> {recipe.dishType?.join(", ") || "N/A"}
      </Text>

      <Text>
        <strong>Cooking time:</strong>{" "}
        {recipe.totalTime > 0 ? `${recipe.totalTime} min` : "N/A"}
      </Text>

      {recipe.dietLabels?.length > 0 && (
        <Text>
          <strong>Diet:</strong> {recipe.dietLabels.join(", ")}
        </Text>
      )}

      <Wrap>
        {recipe.healthLabels.map((label) => (
          <Tag key={label} colorScheme="green">
            {label}
          </Tag>
        ))}
      </Wrap>

      {recipe.cautions?.length > 0 && (
        <Text color="red.400">⚠ {recipe.cautions.join(", ")}</Text>
      )}

      <Heading size="md">Ingredients</Heading>
      <List spacing={1}>
        {recipe.ingredientLines.map((item) => (
          <ListItem key={item}>• {item}</ListItem>
        ))}
      </List>

      <Heading size="md">Nutrients</Heading>

      <Text>
        Energy:{" "}
        {recipe.totalNutrients.ENERC_KCAL?.quantity?.toFixed(0) || "N/A"} kcal
      </Text>
      <Text>
        Protein: {recipe.totalNutrients.PROCNT?.quantity?.toFixed(1) || "N/A"} g
      </Text>
      <Text>
        Fat: {recipe.totalNutrients.FAT?.quantity?.toFixed(1) || "N/A"} g
      </Text>
      <Text>
        Carbs: {recipe.totalNutrients.CHOCDF?.quantity?.toFixed(1) || "N/A"} g
      </Text>
      <Text>
        Cholesterol:{" "}
        {recipe.totalNutrients.CHOLE?.quantity?.toFixed(0) || "N/A"} mg
      </Text>
      <Text>
        Sodium: {recipe.totalNutrients.NA?.quantity?.toFixed(0) || "N/A"} mg
      </Text>
    </Stack>
  );
}

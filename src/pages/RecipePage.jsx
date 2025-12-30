import { useEffect } from "react";
import {
  Button,
  Heading,
  Image,
  List,
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
    <Stack
      p={6}
      pb={16}
      spacing={6}
      maxW="800px"
      mx="auto"
      divider={<Separator />}
    >
      {/* Back button */}
      <Button alignSelf="flex-start" onClick={onBack}>
        ← Back
      </Button>

      {/* Title */}
      <Heading>{recipe.label}</Heading>

      {/* Image */}
      <Image
        src={recipe.image}
        alt={recipe.label}
        borderRadius="lg"
        maxH="400px"
        w="100%"
        objectFit="cover"
      />

      {/* Basic info */}
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

      {/* Diet labels */}
      {recipe.dietLabels?.length > 0 && (
        <Text>
          <strong>Diet:</strong> {recipe.dietLabels.join(", ")}
        </Text>
      )}

      {/* Health labels */}
      <Wrap>
        {recipe.healthLabels.map((label) => (
          <Tag key={label} colorScheme="green">
            {label}
          </Tag>
        ))}
      </Wrap>

      {/* Cautions */}
      {recipe.cautions?.length > 0 && (
        <Text color="red.400">⚠ {recipe.cautions.join(", ")}</Text>
      )}

      {/* Ingredients */}
      <Heading size="md">Ingredients</Heading>
      <List.Root spacing={1}>
        {recipe.ingredientLines.map((item) => (
          <List.Item key={item}>• {item}</List.Item>
        ))}
      </List.Root>

      {/* Nutrients */}
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

import { Text, View, Pressable, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });
  function renderMealItem(itemData) {
    const item = itemData.item;
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsOverviewScreen;

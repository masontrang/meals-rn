import { Text, View, Pressable, Button, FlatList } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function FavoritesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler({ navigate }) {
      navigation.navigate('MealsOverviewScreen', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default FavoritesScreen;

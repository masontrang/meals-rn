import { Button, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
function IconButton() {
  return (
    <Pressable onPress={() => console.log('pressed')}>
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
}
export default IconButton;

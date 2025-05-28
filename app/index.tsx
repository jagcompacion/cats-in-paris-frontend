import { Text, View } from 'react-native';

/**
 * Cats in Paris - Coding Challenge
 * 
 * Your task is to build a React Native app that displays random cat images with captions
 * from the "Cats in Paris" API.
 * 
 * Requirements:
 * 1. Fetch cat data from: http://localhost:3000/api/v1/cat
 * 2. Display the cat image and caption
 * 3. Add a button to fetch a new random cat
 * 4. Handle loading and error states
 * 5. Style it to look nice!
 * 
 * API Response Format:
 * {
 *   image: string;  // URL of the cat image
 *   caption: string; // Description of the cat
 * }
 * 
 * Styling:
 * This project uses Tailwind CSS with NativeWind for styling.
 * You can use Tailwind classes directly in the className prop.
 * Example: className="flex-1 bg-gray-100 p-5"
 * 
 * Documentation: https://www.nativewind.dev/
 */

export default function MainScreen() {
  // Your code goes here
  
  return (
    <View className="flex-1 bg-gray-50 p-5">
      <Text className="text-3xl text-center font-bold text-gray-900 my-6">
        Cats in Paris
      </Text>
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg text-gray-700">
          Your code goes here!
        </Text>
      </View>
    </View>
  );
}

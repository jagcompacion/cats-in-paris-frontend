import { View } from "react-native";

const Skeleton = () => (
  <View className="flex-1">
    <View className="w-full h-64 mb-7 bg-gray-300 rounded-lg animate-pulse" />
    <View className="w-full h-6 bg-gray-200 rounded mb-3 animate-pulse" />
    <View className="w-1/2 h-6 bg-gray-200 rounded mb-3 animate-pulse" />
    <View className="w-4/5 h-6 bg-gray-200 rounded animate-pulse" />
  </View>
);

export default Skeleton;

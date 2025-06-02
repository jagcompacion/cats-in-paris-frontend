import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type ErrorProps = {
  message: string | null;
};

const Error = ({ message }: ErrorProps) => {
  if (!message) return null;
  return (
    <View className="flex-1 items-center p-4 mb-4">
      <MaterialIcons
        name="error-outline"
        size={50}
        color="red"
        className="mb-5"
      />
      <Text className="text-xl mb-3 font-bold text-gray-800">
        Oops... Something went wrong
      </Text>
      <Text className="text-lg">{message}</Text>
    </View>
  );
};

export default Error;

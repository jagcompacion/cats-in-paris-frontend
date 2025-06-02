import { Image, Text, View } from "react-native";
import useCat from "../../hooks/useCat";
import Button from "../ui/Button";
import Error from "./Error";
import Header from "./Header";
import Skeleton from "./Skeleton";

const CatComponent = () => {
  const { data, isLoading, error, refetch } = useCat();

  return (
    <View className="flex-1">
      <Header />
      <View className="flex-1 p-7">
        {isLoading && <Skeleton />}
        {error && <Error message={error} />}
        {data && (
          <View className="flex-1">
            {data?.imageUrl && (
              <Image
                source={{ uri: data.imageUrl }}
                className="w-full h-64 mb-5"
                resizeMode="cover"
              />
            )}
            <Text className="text-lg font-semibold">
              {data?.expertDescription}
            </Text>
          </View>
        )}
        <View className="px-7 pt-7 pb-[40px] flex-row justify-center">
          <Button onPress={refetch} disabled={isLoading}>
            <Text className="text-white text-lg font-semibold">
              New City Cat
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CatComponent;

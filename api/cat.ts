export const fetchCat = async () => {
  try {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/v1/cat`);
    return response.json();
  } catch (error) {
    console.error("Error fetching cat:", error);
    throw error;
  }
};

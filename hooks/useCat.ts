import { useEffect, useState } from "react";
import { fetchCat } from "../api/cat";

type CatResponse = {
  imageUrl: string;
  expertDescription: string;
};

type CatState = {
  data: CatResponse | null;
  isLoading: boolean;
  error: string | null;
};

const useCat = () => {
  const [state, setState] = useState<CatState>({
    data: null,
    isLoading: true,
    error: null,
  });

  const getCat = async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const catData = await fetchCat();
      setState({ data: catData, isLoading: false, error: null });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  return { ...state, refetch: getCat };
};

export default useCat;

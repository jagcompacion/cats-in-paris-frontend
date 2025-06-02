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

const initState = {
  data: null,
  isLoading: true,
  error: null,
};

const useCat = () => {
  const [state, setState] = useState<CatState>(initState);

  const getCat = async () => {
    setState(initState);
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

import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Ensure loading state is always set before fetching

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error); // Log error for debugging
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
import {useEffect, useState} from 'react';

export type IFetchMethod = 'Get' | 'Post' | 'Delete' | 'Patch' | 'Put' | 'Head'

export function useFetch<T>(url: string, method: IFetchMethod = 'Get', body?: any) {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method,
        ...(body && {body})
      });
      const json = await res.json();
      setResponse(json);
      setIsLoading(false)
    } catch (error) {
      setError(error);
      setIsLoading(false)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {response, error, isLoading};
};

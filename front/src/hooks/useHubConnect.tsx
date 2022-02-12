import { useState, useEffect, useContext, useCallback } from "react";

export function useFetch<T>(): [
  T | null,
  boolean,
  boolean,
  (url: string, ...val: (number | number[])[]) => void
] {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [options, setOptions] = useState<(number | number[])[]>([]);
  const [method, setMethod] = useState<string>("");

  const doFetch = useCallback((url: string, ...args: (number | number[])[]) => {
    setMethod(url);
    setOptions(args);
    setIsLoading(true);
  }, []);

  return [response, error, isLoading, doFetch];
}

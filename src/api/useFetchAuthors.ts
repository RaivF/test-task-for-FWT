import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axiosAPI from "./axiosInstances";

export type ResultAuthors = {
  id: number;
  name: string;
};

export const getAuthors = async (): Promise<ResultAuthors[]> => {
  const { data } = await axiosAPI.get("authors");

  return data;
};

const useFetchAuthors = (): UseQueryResult<ResultAuthors[], Error> => {
  return useQuery({
    queryKey: ["authors"],
    queryFn: getAuthors,
  });
};

export default useFetchAuthors;

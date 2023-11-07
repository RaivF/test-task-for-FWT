import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axiosAPI from "./axiosInstances";

export type ResultLocations = {
  id: number;
  location: string;
};

export const getLocations = async (): Promise<ResultLocations[]> => {
  const { data } = await axiosAPI.get("locations");

  return data;
};

const useFetchLocations = (): UseQueryResult<ResultLocations[], Error> => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: getLocations,
  });
};

export default useFetchLocations;

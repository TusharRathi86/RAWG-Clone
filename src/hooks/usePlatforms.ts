import platforms from "../data/platform";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import  Platform  from "../utils/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
    initialData: platforms,
  });

export default usePlatforms;

/* 

initialData: { count: platforms.length, results: platforms, next: null },

*/

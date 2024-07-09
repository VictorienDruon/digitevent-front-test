import { useQuery } from "@tanstack/react-query";
import { fetchMath, fetchDate } from "..";

export function useFetchMath() {
	return useQuery({
		queryKey: ["math"],
		queryFn: async () => {
			return await fetchMath();
		},
	});
}

export function useFetchDate() {
	return useQuery({
		queryKey: ["dates"],
		queryFn: async () => {
			return await fetchDate();
		},
	});
}

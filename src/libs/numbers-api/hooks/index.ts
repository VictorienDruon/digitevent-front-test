import { useQuery } from "@tanstack/react-query";
import { fetchMath as fetchMathFact, fetchDate as fetchDateFact } from "..";
import type { Log } from "@/types/log";

export function useFetchMathFact(addLog: (log: Log) => void) {
	return useQuery({
		queryKey: ["math"],
		queryFn: async () => {
			const fact = await fetchMathFact();
			addLog({
				title: "Math Fact",
				description: fact,
				createdAt: new Date(),
			});
			return fact;
		},
	});
}

export function useFetchDateFact(addLog: (log: Log) => void) {
	return useQuery({
		queryKey: ["dates"],
		queryFn: async () => {
			const fact = await fetchDateFact();
			addLog({
				title: "Date Fact",
				description: fact,
				createdAt: new Date(),
			});
			return fact;
		},
	});
}

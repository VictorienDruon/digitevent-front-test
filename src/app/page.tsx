"use client";

import { useLogs } from "@/providers/logs-provider";
import { useFetchMathFact, useFetchDateFact } from "@/libs/numbers-api/hooks";
import { Stack } from "@styled-system/jsx";
import { Heading } from "@/components/ui";
import { Card } from "@/components/card";
import { LogEntry } from "@/components/log-entry";

const HomePage = () => {
	const { logs, addLog } = useLogs();

	const {
		data: mathFact,
		isPending: isMathPending,
		refetch: refreshMath,
	} = useFetchMathFact(addLog);
	const {
		data: dateFact,
		isPending: isDatePending,
		refetch: refreshDate,
	} = useFetchDateFact(addLog);

	if (isMathPending || !mathFact || isDatePending || !dateFact) {
		return <div>Loading...</div>;
	}

	return (
		<main>
			<Stack flexDir={["col", "row"]}>
				<Stack>
					<Card
						title="Math Fact"
						description={mathFact}
						onRefresh={refreshMath}
					/>
					<Card
						title="Date Fact"
						description={dateFact}
						onRefresh={refreshDate}
					/>
				</Stack>

				<Stack px="8" py="4" borderWidth="1" borderRadius="xl" boxShadow="xl">
					<Heading>Logs</Heading>
					{logs.map((log, index) => (
						<LogEntry key={index} log={log} />
					))}
				</Stack>
			</Stack>
		</main>
	);
};

export default HomePage;

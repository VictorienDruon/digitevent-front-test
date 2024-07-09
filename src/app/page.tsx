"use client";

import { useLogs } from "@/providers/logs-provider";
import { useFetchMathFact, useFetchDateFact } from "@/libs/numbers-api/hooks";
import { Box, Stack } from "@styled-system/jsx";
import { Card } from "@/components/card";
import { LogsHistory } from "@/components/logs-history";

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
			<Box
				display="flex"
				w="screen"
				h="screen"
				justifyContent="center"
				alignItems="center"
				p="4"
				bg="gray.300"
			>
				<Stack flexDir="row" maxW="6xl" h="full" mx="auto" gap="4">
					<Stack w="1/2">
						<Card
							title="A cool Math Fact"
							description={mathFact}
							onRefresh={refreshMath}
						/>
						<Card
							title="A cool Date Fact"
							description={dateFact}
							onRefresh={refreshDate}
						/>
					</Stack>

					<LogsHistory logs={logs} />
				</Stack>
			</Box>
		</main>
	);
};

export default HomePage;

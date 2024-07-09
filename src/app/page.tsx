"use client";

import { useFetchMath, useFetchDate } from "@/libs/numbers-api/hooks";
import { Stack } from "@styled-system/jsx";
import { Card } from "@/components/card";

const HomePage = () => {
	const {
		data: mathFact,
		isPending: isMathPending,
		refetch: refreshMath,
	} = useFetchMath();
	const {
		data: dateFact,
		isPending: isDatePending,
		refetch: refreshDate,
	} = useFetchDate();

	if (isMathPending || !mathFact || isDatePending || !dateFact) {
		return <div>Loading...</div>;
	}

	return (
		<main>
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
		</main>
	);
};

export default HomePage;

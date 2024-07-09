"use client";

import { Card } from "@/components/card";
import { useFetchMath, useFetchDate } from "@/libs/numbers-api/hooks";
import { css } from "@styled-system/css";

const HomePage = () => {
	const { data, isPending } = useFetchDate();

	if (isPending || !data) {
		return <div>Loading...</div>;
	}

	return (
		<main>
			<Card title="Date Fact" description={data} />
		</main>
	);
};

export default HomePage;

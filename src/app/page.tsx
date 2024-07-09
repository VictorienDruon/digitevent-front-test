"use client";

import { useFetchMath, useFetchDate } from "@/libs/numbers-api/hooks";
import { css } from "@styled-system/css";

const HomePage = () => {
	const { data, isPending } = useFetchDate();

	if (isPending) {
		return <div>Loading...</div>;
	}

	return (
		<main>
			<div
				className={css({ fontSize: "2xl", fontWeight: "bold", color: "red" })}
			>
				{data}
			</div>
		</main>
	);
};

export default HomePage;

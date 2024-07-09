import { Stack } from "@styled-system/jsx";
import { Heading, Text } from "./ui";
import type { Log } from "@/types/log";

type LogEntryProps = {
	log: Log;
};

export const LogEntry = ({ log }: LogEntryProps) => {
	return (
		<Stack>
			<Text>{log.date.toLocaleDateString()}</Text>
			<Heading>{log.title}</Heading>
			<Text>{log.description}</Text>
		</Stack>
	);
};

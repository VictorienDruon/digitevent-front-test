import { Stack } from "@styled-system/jsx";
import { Heading, Text } from "./ui";
import type { Log } from "@/types/log";

type LogEntryProps = {
	log: Log;
};

export const LogEntry = ({ log }: LogEntryProps) => {
	return (
		<Stack gap="0">
			<Text fontWeight="semibold">{log.date.toLocaleTimeString()}</Text>
			<Heading fontWeight="semibold">{log.title}</Heading>
			<Text>{log.description}</Text>
		</Stack>
	);
};

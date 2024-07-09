import { Stack } from "@styled-system/jsx";
import { Heading } from "@/components/ui";
import { LogEntry } from "./log-entry";
import type { Log } from "@/types/log";

type LogsHistoryProps = {
	logs: Log[];
};

export const LogsHistory = ({ logs }: LogsHistoryProps) => {
	return (
		<Stack
			w="1/2"
			p="8"
			gap="8"
			bg="white"
			borderWidth="1"
			borderRadius="xl"
			boxShadow="xl"
			overflow="scroll"
		>
			<Heading fontWeight="semibold" textDecoration="underline">
				Logs
			</Heading>
			{logs.map((log, index) => (
				<LogEntry key={index} log={log} />
			))}
		</Stack>
	);
};

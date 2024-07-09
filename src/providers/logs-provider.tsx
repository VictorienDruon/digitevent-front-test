"use client";

import {
	createContext,
	useContext,
	useState,
	type PropsWithChildren,
} from "react";
import type { Log } from "@/types/log";

interface LogsContext {
	logs: Log[];
	addLog: (log: Log) => void;
}

const LogsContext = createContext<LogsContext>({ logs: [], addLog: () => {} });

export const LogsProvider = ({ children }: PropsWithChildren) => {
	const [logs, setLogs] = useState<Log[]>([]);

	const addLog = (log: Log) => {
		setLogs((prevLogs) => {
			const updatedLogs = [...prevLogs, log];
			updatedLogs.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
			);
			return updatedLogs;
		});
	};

	return (
		<LogsContext.Provider value={{ logs, addLog }}>
			{children}
		</LogsContext.Provider>
	);
};

export const useLogs = () => useContext(LogsContext);

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
		setLogs((prevLogs) => [...prevLogs, log]);
	};

	return (
		<LogsContext.Provider value={{ logs, addLog }}>
			{children}
		</LogsContext.Provider>
	);
};

export const useLogs = () => useContext(LogsContext);
